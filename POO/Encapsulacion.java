public class Encapsulacion
{
        private String nombre;
        private String apellido;
        private String correo;

        public String getNombre()
        {
                return nombre;
        }
        public void setNombre(String nombre)
        {
                this.nombre = nombre;
        }

        public String getApellido()
        {
                return apellido;
        }
        public void setApellido(String apellido)
        {
                this.apellido = apellido;
        }

        public String getCorreo()
        {
                return correo;
        }
        public void setCorreo(String correo)
        {
                this.correo = correo;
        }
}

// Y en el main seria asi:

public class Principal
{
        public static void main(String args[])
        {
                Encapsulacion Alumno1 = new Encapsulacion();
                // Ingreso los datos con los Setter a la nueva instancia de
                // Alumno, estos datos pueden ingresarse desde teclado
               Alumno1.setNombre("Manuel");
                Alumno1.setApellido("Guerra");
                Alumno1.setCorreo("mguerui@adaits.es");

                // Para obtener los datos uso los Getter
                // y los podemos imprimir en Consola
                System.out.println(Alumno1.getNombre());
                System.out.println(Alumno1.getApellido());
                System.out.println(Alumno1.getCorreo());
        }
}