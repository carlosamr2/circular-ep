-- CreateTable
CREATE TABLE "Contacto" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nombre" VARCHAR(255) NOT NULL,
    "apellido" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "celular" VARCHAR(255) NOT NULL,

    CONSTRAINT "Contacto_pkey" PRIMARY KEY ("id")
);
