import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const payload = await request.json();
    
    // Solo nos interesa cuando se crea una nueva cita
    if (payload.triggerEvent === 'BOOKING_CREATED') {
      const attendee = payload.payload.attendees[0];
      
      // Extraemos los datos básicos que entrega Cal.com
      const nombreCompleto = attendee.name || 'Sin Nombre';
      const email = attendee.email || 'sin@email.com';
      
      // Intentamos insertar al paciente. Como el RUT no siempre viene por defecto
      // en Cal.com (a menos que se agregue como custom field), generaremos un RUT 
      // temporal basado en el timestamp si no existe, o lo extraemos de los campos personalizados.
      const customRut = payload.payload.responses?.rut?.value || `TEMP-${Date.now()}`;
      const telefono = payload.payload.responses?.telefono?.value || '';

      const { data, error } = await supabase
        .from('pacientes')
        .insert([{
          rut: customRut,
          nombre_completo: nombreCompleto,
          email: email,
          telefono: telefono,
          grupo_sanguineo: 'Desconocido'
        }])
        .select();

      if (error) {
        // Si el paciente ya existe (RUT duplicado u otro constraint), ignoramos
        // En un sistema real, aquí actualizaríamos el paciente o lo asociaríamos a la cita.
        console.error("Error o paciente existente:", error);
      }

      return NextResponse.json({ message: "Webhook recibido y procesado", success: true });
    }

    return NextResponse.json({ message: "Evento no procesado" });

  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
