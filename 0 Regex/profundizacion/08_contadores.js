/*

NUMERO DE APARICIONES

**************
\d{2,2} minimo dos numeros y maximo dos numeros
\w{2,2} minimo dos caracteres y maximo dos caracteres
\w{4,} minimo cuatro y maximo muchos

\d{2,2}\-?\d{2,2}\-?\d{2,2}\-? 1234567891 12-12-12-12-22
\d{2,2}-?\d{2,2}-?\d{2,2}-? 1234567891 12-12-12-12-22
\d{2,2}[-\.]?\d{2,2}[-\.]?\d{2,2}[-\.]?\d{2,2}[-\.]?\d{2,2}[-\.]? 1234567891 12-12-12-12-22 12.12.12.12.22
(\d{2,2}[-\.]?){5,5} 1234567891 12-12-12-12-22 12.12.12.12.22 (abreviación de la clase superior)
**************





  */
