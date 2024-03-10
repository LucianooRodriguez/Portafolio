import './Contacto.css'

const Contacto = () => {
   
    return (
        <main class="bloqueprincipal">
            <div class="card text-bg-dark">

                    <h5 class="titulo card-title">Contacto</h5> 
                    <section class="seccion__contacto d-flex justify-content-center">
                        <article class="form row d-flex justify-content-center text-center">
                            
                            <form class="container-fluid row d-flex justify-content-center">
                                <div class="col-lg-11">
                                    <label class="nombres d-flex justify-content-start" for="specificSizeInputName">Nombres</label>
                                    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Escriba sus nombres"/>
                                </div>
                                <div class="col-lg-11 ">
                                    <label class="apellidos d-flex justify-content-start" for="specificSizeInputName">Apellidos</label>
                                    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Escriba sus apellidos"/>
                                </div>
                                <div class="col-lg-11">
                                    <label class="email d-flex justify-content-start" for="specificSizeInputName">Email</label>
                                    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Email"/>
                                </div>
                                <div class="col-lg-11">
                                    <label class="asunto d-flex justify-content-start" for="specificSizeInputName">Asunto</label>
                                    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Asunto"/>
                                </div>
                                <div class="col-lg-11">
                                    <label class="mensaje d-flex justify-content-start" for="specificSizeInputName">Mensaje</label>
                                    <input type="text" class="form-control" id="specificSizeInputName" placeholder="Mensaje"/>
                                </div>
                                <div class="text-center">
                                <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </form>
                            
                        </article>
                    </section>
                
            </div>
           


        </main>
    )
}

export default Contacto