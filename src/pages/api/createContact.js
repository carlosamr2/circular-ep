'use server'

import prisma from '@/lib/prisma'
import { rateLimiterMiddleware } from '@/middleware/middleware'

export default async function createContact(req, res) {
  await rateLimiterMiddleware(req, res, async () => {
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
    res.status(200).json({ message: 'Contact created' })
  })
}
