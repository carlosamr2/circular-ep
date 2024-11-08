'use server'

import prisma from '@/lib/prisma'

export default async function createContact(req, res) {
  console.log('first')
  if (req.method === 'POST') {
    const { nombre, apellido, email, contenido } = req.body
    try {
      const contact = await prisma.Contacto.create({
        data: {
          nombre,
          apellido,
          email,
          contenido,
        },
      })
      res.status(200).json(contact)
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error creating contact' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
