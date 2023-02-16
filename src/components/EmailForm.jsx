function EmailForm(props) {
    return ( 
        <form ref={props.form} onSubmit={props.sendEmail}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre"/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="correo"/>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea name="mensaje" cols="30" rows="10"></textarea>
            <button>Enviar</button>
        </form>
     );
}

export default EmailForm;