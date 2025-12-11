class GestorIdiomas {
    constructor() {
        // --- 1. CONFIGURACIÓN INICIAL ---
        // Evita que el navegador restaure el scroll automáticamente al recargar, 
        // para que podamos controlar nosotros el scroll al buscar.
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Recuperar idioma guardado (Persistencia)
        this.idiomaActual = localStorage.getItem('idiomaSeleccionado') || "es";

        // --- 2. DEFINICIÓN DE DATOS ---
        // Mapa para saber en qué archivo está cada clave del diccionario
        this.mapaPaginas = {
            index: "index.html", menu: "index.html", footer: "index.html", 
            placeholder: "index.html", tooltip: "index.html", migas: "index.html",
            estudios: "estudios.html", edu: "estudios.html", exp: "estudios.html", label: "estudios.html",
            afic: "aficiones.html", aficiones: "aficiones.html", sec: "aficiones.html",
            contacto: "contacto.html", redes: "contacto.html", msg: "contacto.html",
            titulo: "index.html",
            form: "contacto.html", ref: "contacto.html", status: "contacto.html",
            text: "contacto.html", btn: "contacto.html"
        };
        
        // Nombres legibles para mostrar en el buscador
        this.nombresBonitos = {
            "index.html": "Inicio", "estudios.html": "Estudios",
            "aficiones.html": "Aficiones", "contacto.html": "Contacto"
        };

        this.diccionario = {
            es: {
                // --- COMUNES ---
                menu_inicio: "<em>I</em>nicio",
                menu_estudios: "E<em>s</em>tudios",
                menu_aficiones: "<em>A</em>ficiones",
                menu_contacto: "C<em>o</em>ntacto",
                btn_cambiar: "Eng<em>l</em>ish",
                footer_texto: "© 2025 Mi Página Web Personal. Todos los derechos reservados.",
                footer_last_update: "Última Actualización: 2025-12-10",
                placeholder_buscar: "Buscar...",

                // 🔑 CLAVES DE NOMBRES DE PÁGINA
                index_nombre: "Inicio",
                estudios_nombre: "Estudios",
                aficiones_nombre: "Aficiones",
                contacto_nombre: "Contacto",
                msg_sin_resultados: "Sin resultados...",

                // --- INDEX ---
                index_titulo_principal: "Bienvenido a mi página web",
                index_sec_inicio: "Inicio",
                index_desc_inicio: "Esta es mi página web personal donde comparto información sobre mí y mis aficiones.",
                index_desc_estudios: "Aquí puedes ver información sobre mi formación académica y profesional.",
                index_desc_aficiones: "En esta sección puedes ver mis mayores aficiones.",
                index_desc_contacto: "Información de contacto y formulario para que puedan comunicarse conmigo.",

                // --- ESTUDIOS ---
                migas_estudios: "Estudios",
                estudios_h1: "Mis Estudios",
                titulo_pestana_estudios: "Formación Académica",
                estudios_h1_principal: "Formación Académica",
                sec_educacion: "Educación",
                sec_experiencia: "Experiencia Profesional",
                label_uni: "Universidad:",
                label_periodo: "Período:",
                label_especialidad: "Especialización:",
                label_desc: "Descripción:",
                label_nota: "Nota media:",
                label_fecha: "Fecha:",
                edu_master_titulo: "Máster en Ingeniería Web",
                edu_master_lugar: "Universidad de Oviedo",
                edu_master_fecha: "2025 - Actualmente",
                edu_master_esp: "Internet de las cosas",
                edu_master_desc: "El Máster Universitario en Ingeniería Web de la Universidad de Oviedo ofrece especialización en desarrollo web, IoT o seguridad web.",
                edu_grado_titulo: "Grado en Ingeniería Informática del Software",
                edu_grado_lugar: "Universidad de Oviedo",
                edu_grado_fecha: "2020 - 2025",
                edu_grado_desc: "El Grado en Ingeniería Informática ofrece formación en software, sistemas, redes y tecnologías de la información.",
                exp_edp_titulo: "Becario de hidráulicas",
                exp_edp_lugar: "EDP - Oviedo",
                exp_edp_fecha: "10/2024 - 07/2025",
                exp_edp_desc1: "Automatización de informes",
                exp_edp_desc2: "Supervisión del sistema SCADA",
                exp_edp_desc3: "Migración de bases de datos",
                exp_cap_titulo: "Desarrollador Junior",
                exp_cap_lugar: "Capgemini - La Felguera",
                exp_cap_fecha: "06/2023 - 09/2023",
                exp_cap_desc1: "Desarrollo web",
                exp_cap_desc2: "Obtención de 100k puntos en el portal trailhead de Salesforce",
                
                // --- AFICIONES ---
                titulo_pestana_aficiones: "Mis Hobbies y Aficiones",
                aficiones_h1_principal: "Mis Hobbies y Aficiones",
                sec_deportes: "Deportes",
                sec_tecnologia: "Tecnología",
                sec_arte: "Arte y Creatividad",
                sec_lectura: "Lectura y Aprendizaje",
                sec_airelibre: "Actividades al Aire Libre",
                afic_remo: "Remo",
                afic_remo_desc: "Practico regularmente en un equipo local",
                afic_natacion: "Natación",
                afic_natacion_desc: "Me ayuda a mantenerme en forma",
                afic_ciclismo: "Ciclismo",
                afic_ciclismo_desc: "Disfruto de rutas por la montaña",
                afic_progra: "Programación",
                afic_progra_desc: "Desarrollo aplicaciones web",
                afic_gaming: "Gaming",
                afic_gaming_desc: "Juegos de estrategia y aventura",
                afic_robotica: "Robótica",
                afic_robotica_desc: "Construcción de pequeños robots",
                afic_foto: "Fotografía",
                afic_foto_desc: "Capturo paisajes y retratos",
                afic_dibujo: "Dibujo",
                afic_dibujo_desc: "Sketches y arte digital",
                afic_musica: "Música",
                afic_musica_desc: "Toco la guitarra en mi tiempo libre",
                afic_libros: "Libros de ciencia ficción",
                afic_docus: "Documentales sobre historia",
                afic_cursos: "Cursos online de nuevas tecnologías",
                afic_senderismo: "Senderismo",
                afic_senderismo_desc: "Exploro rutas naturales",
                afic_camping: "Camping",
                afic_camping_desc: "Aventuras en la naturaleza",
                afic_jardin: "Jardinería",
                afic_jardin_desc: "Cultivo plantas y vegetales",

                // --- CONTACTO ---
                titulo_pestana_contacto: "Contacto - Mi Página Web",
                contacto_h1_principal: "Contacto",
                sec_info_contacto: "Información de Contacto",
                label_email: "Correo Electrónico:",
                label_estado: "Situación Laboral:",
                label_ubicacion: "Ubicación:",
                status_disponible: "🟢 Disponible para trabajar",
                text_ubicacion: "Oviedo, Asturias, España",
                btn_descargar_cv: "Descargar Currículum (PDF)",
                sec_referencias: "Referencias Profesionales",
                desc_referencias: "Personas que pueden avalar mi trabajo y formación:",
                ref_1_cargo: "Profesor Titular - Universidad de Oviedo",
                ref_2_cargo: "Supervisora Técnica - EDP",
                sec_formulario: "Envíame un mensaje",
                form_nombre: "Tu Nombre:",
                form_email: "Tu Correo:",
                form_mensaje: "Tu Mensaje:",
                form_btn_enviar: "Enviar Mensaje",
                msg_enviado: "¡Gracias! Tu mensaje ha sido enviado correctamente (Simulación).",
                sec_redes: "Redes Sociales",
                redes_desc: "Puedes encontrarme también en estas plataformas:",

                tooltip_inicio: "Volver a la página principal (Alt + I)",
                tooltip_estudios: "Ver mi formación académica (Alt + S)",
                tooltip_aficiones: "Ver mis pasatiempos (Alt + A)",
                tooltip_contacto: "Formas de contactar conmigo (Alt + O)",
                tooltip_idioma: "Cambiar el idioma de la web (Alt + L)"
            },
            en: {
                // --- COMMON ---
                menu_inicio: "Hom<em>e</em>",
                menu_estudios: "<em>S</em>tudies",
                menu_aficiones: "Hobbies (<em>A</em>)",
                menu_contacto: "C<em>o</em>ntact",
                btn_cambiar: "Españo<em>l</em>",
                footer_texto: "© 2025 My Personal Website. All rights reserved.",
                footer_last_update: "Last Update: 2025-12-10",
                placeholder_buscar: "Search...",

                // 🔑 CLAVES DE NOMBRES DE PÁGINA
                index_nombre: "Home",
                estudios_nombre: "Studies",
                aficiones_nombre: "Hobbies", 
                contacto_nombre: "Contact",
                msg_sin_resultados: "No results found...",

                // --- INDEX ---
                index_titulo_principal: "Welcome to my website",
                index_sec_inicio: "Home",
                index_desc_inicio: "This is my personal website where I share information about myself and my hobbies.",
                index_desc_estudios: "Here you can see information about my academic and professional background.",
                index_desc_aficiones: "In this section you can see my greatest hobbies.",
                index_desc_contacto: "Contact information and form to get in touch with me.",

                // --- STUDIES ---
                migas_estudios: "Studies",
                estudios_h1: "My Studies",
                titulo_pestana_estudios: "Academic Background",
                estudios_h1_principal: "Academic Background",
                sec_educacion: "Education",
                sec_experiencia: "Professional Experience",
                label_uni: "University:",
                label_periodo: "Period:",
                label_especialidad: "Specialization:",
                label_desc: "Description:",
                label_nota: "Average Grade:",
                label_fecha: "Date:",
                edu_master_titulo: "Master in Web Engineering",
                edu_master_lugar: "University of Oviedo",
                edu_master_fecha: "2025 - Present",
                edu_master_esp: "Internet of Things (IoT)",
                edu_master_desc: "The Master's Degree in Web Engineering offers specialization in web development, IoT, or web security.",
                edu_grado_titulo: "Bachelor's Degree in Software Engineering",
                edu_grado_lugar: "University of Oviedo",
                edu_grado_fecha: "2020 - 2025",
                edu_grado_desc: "The Degree in Computer Engineering offers training in software, systems, networks, and information technologies.",
                exp_edp_titulo: "Hydraulics Intern",
                exp_edp_lugar: "EDP - Oviedo",
                exp_edp_fecha: "10/2024 - 07/2025",
                exp_edp_desc1: "Report automation",
                exp_edp_desc2: "SCADA system supervision",
                exp_edp_desc3: "Database migration",
                exp_cap_titulo: "Junior Developer",
                exp_cap_lugar: "Capgemini - La Felguera",
                exp_cap_fecha: "06/2023 - 09/2023",
                exp_cap_desc1: "Web development",
                exp_cap_desc2: "Achieved 100k points on the Salesforce Trailhead portal",
                
                // --- HOBBIES ---
                titulo_pestana_aficiones: "My Hobbies and Interests",
                aficiones_h1_principal: "My Hobbies and Interests",
                sec_deportes: "Sports",
                sec_tecnologia: "Technology",
                sec_arte: "Art and Creativity",
                sec_lectura: "Reading and Learning",
                sec_airelibre: "Outdoor Activities",
                afic_remo: "Rowing",
                afic_remo_desc: "I practice regularly with a local team",
                afic_natacion: "Swimming",
                afic_natacion_desc: "It helps me stay in shape",
                afic_ciclismo: "Cycling",
                afic_ciclismo_desc: "I enjoy mountain routes",
                afic_progra: "Programming",
                afic_progra_desc: "I develop web applications",
                afic_gaming: "Gaming",
                afic_gaming_desc: "Strategy and adventure games",
                afic_robotica: "Robotics",
                afic_robotica_desc: "Building small robots",
                afic_foto: "Photography",
                afic_foto_desc: "I capture landscapes and portraits",
                afic_dibujo: "Drawing",
                afic_dibujo_desc: "Sketches and digital art",
                afic_musica: "Music",
                afic_musica_desc: "I play guitar in my free time",
                afic_libros: "Science fiction books",
                afic_docus: "History documentaries",
                afic_cursos: "Online courses on new technologies",
                afic_senderismo: "Hiking",
                afic_senderismo_desc: "I explore natural routes",
                afic_camping: "Camping",
                afic_camping_desc: "Adventures in nature",
                afic_jardin: "Gardening",
                afic_jardin_desc: "I grow plants and vegetables",

                // --- CONTACT ---
                titulo_pestana_contacto: "Contact - My Website",
                contacto_h1_principal: "Contact",
                sec_info_contacto: "Contact Information",
                label_email: "Email Address:",
                label_estado: "Work Status:",
                label_ubicacion: "Location:",
                status_disponible: "🟢 Open to work",
                text_ubicacion: "Oviedo, Asturias, Spain",
                btn_descargar_cv: "Download Resume (PDF)",
                sec_referencias: "Professional References",
                desc_referencias: "People who can vouch for my work and background:",
                ref_1_cargo: "Associate Professor - University of Oviedo",
                ref_2_cargo: "Technical Supervisor - EDP",
                sec_formulario: "Send me a message",
                form_nombre: "Your Name:",
                form_email: "Your Email:",
                form_mensaje: "Your Message:",
                form_btn_enviar: "Send Message",
                msg_enviado: "Thank you! Your message has been sent successfully (Simulation).",
                sec_redes: "Social Media",
                redes_desc: "You can also find me on these platforms:",

                tooltip_inicio: "Go back to the main page (Alt + I)",
                tooltip_estudios: "See my academic background (Alt + S)",
                tooltip_aficiones: "See my hobbies (Alt + A)",
                tooltip_contacto: "Ways to contact me (Alt + O)",
                tooltip_idioma: "Change website language (Alt + L)"
            }
        };

        // --- 3. INICIALIZACIÓN SEGURA ---
        const iniciarApp = () => {
            this._actualizarVista();
            this.verificarBusquedaURL();
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', iniciarApp);
        } else {
            iniciarApp();
        }

        // --- 4. EVENTOS GLOBALES ---
        document.addEventListener('click', (e) => {
            // Buscamos el input del nav específicamente
            const input = document.querySelector('nav input[type="text"]');
            
            if (input) {
                const listaVisual = input.nextElementSibling; // Asume que el UL va justo después del Input
                
                // Si existe la lista y el click NO fue en el input NI en la lista
                if (listaVisual && !input.contains(e.target) && !listaVisual.contains(e.target)) {
                    // Ocultamos visual y semánticamente
                    listaVisual.style.display = 'none';
                    listaVisual.setAttribute('hidden', '');
                    input.setAttribute('aria-expanded', 'false');
                }
            }
        });

        window.addEventListener('pageshow', () => {
            this.idiomaActual = localStorage.getItem('idiomaSeleccionado') || "es";
            this._actualizarVista();
        });
    }

    // --- MÉTODOS DE LA CLASE ---

    // 🔙 FORMULARIO: Simulación visual
    enviarFormulario(event) {
        event.preventDefault(); 
        const form = event.target;
        const estado = document.getElementById('mensaje-estado');
        const mensajeTexto = this.diccionario[this.idiomaActual]["msg_enviado"] || "Enviado";
        
        if (estado) {
            estado.textContent = mensajeTexto;
            estado.style.display = 'block';
            estado.className = 'exito'; 
            estado.style.color = '#155724'; 
            estado.style.backgroundColor = '#d4edda'; 
            estado.style.padding = '10px';
            
            setTimeout(() => {
                estado.style.display = 'none';
            }, 5000);
        } else {
            alert(mensajeTexto);
        }

        form.reset(); 
    }

    alternarIdioma() {
        this.limpiarMarcas(); 
        this.idiomaActual = (this.idiomaActual === "es") ? "en" : "es";
        localStorage.setItem('idiomaSeleccionado', this.idiomaActual);
        
        this._actualizarVista();
        
        // Si hay texto en el buscador, refrescar la búsqueda en el nuevo idioma
        const input = document.querySelector('nav input[type="text"]');
        if (input && input.value.length >= 2) {
            setTimeout(() => this.buscarLocal(input.value, true), 50);
        }
    }

    // 🚀 CONTROL DE TECLADO Y NAVEGACIÓN (Corrección de Enter)
    gestionarNavegacion(event, inputElement) {
        const lista = inputElement.nextElementSibling;
        
        // Si la lista no existe o no se ve (display none), Enter ejecuta búsqueda local
        if (!lista || lista.style.display === 'none') {
            if (event.key === "Enter") {
                this.mostrarSugerencias(inputElement);
                // Esperamos a que se genere la lista y seleccionamos el primero si existe
                setTimeout(() => {
                    const sugerenciasNuevas = lista.querySelectorAll('[role="option"]');
                    if (sugerenciasNuevas.length > 0) {
                        sugerenciasNuevas[0].click();
                    } else {
                        this.buscarLocal(inputElement.value, true);
                    }
                }, 50);
            }
            return;
        }

        const sugerencias = lista.querySelectorAll('[role="option"]');
        
        // Si la lista está vacía (aunque visible), buscar local
        if (sugerencias.length === 0) {
            if (event.key === "Enter") this.buscarLocal(inputElement.value, true);
            return;
        }

        let indexActual = -1;
        // Identificar cuál tiene el foco
        for (let i = 0; i < sugerencias.length; i++) {
            if (sugerencias[i] === document.activeElement) {
                indexActual = i;
                break;
            }
        }

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault(); 
                if (indexActual < sugerencias.length - 1) {
                    sugerencias[indexActual + 1].focus();
                } else {
                    sugerencias[0].focus(); 
                }
                break;

            case 'ArrowUp':
                event.preventDefault(); 
                if (indexActual > 0) {
                    sugerencias[indexActual - 1].focus();
                } else if (indexActual === 0) {
                    inputElement.focus();
                }
                break;

            case 'Enter':
                event.preventDefault(); 
                if (indexActual !== -1) {
                    // Si ya tenía uno seleccionado con flechas
                    sugerencias[indexActual].click(); 
                } else if (sugerencias.length > 0) {
                    // 🔥 SI NO HABÍA SELECCIÓN, SELECCIONAR EL PRIMERO AUTOMÁTICAMENTE
                    sugerencias[0].click(); 
                } else {
                    this.buscarLocal(inputElement.value, true);
                }
                break;
                
            case 'Escape':
                lista.style.display = 'none'; 
                lista.setAttribute('hidden', '');
                inputElement.setAttribute('aria-expanded', 'false');
                inputElement.focus(); 
                break;
        }
    }

    seleccionarSugerencia(buttonElement) {
        const li = buttonElement.closest('li');
        const archivoDestino = li.dataset.destino;
        const textoBusqueda = li.dataset.busqueda;
        const lista = buttonElement.closest('ul');
        const input = document.querySelector('nav input[type="text"]');

        // Cerrar lista correctamente
        if (lista) {
            lista.style.display = 'none';
            lista.setAttribute('hidden', '');
        }
        if (input) {
            input.setAttribute('aria-expanded', 'false');
            input.focus();
        }
        
        this.irAPagina(archivoDestino, textoBusqueda);
    }

    // 🚀 MOSTRAR SUGERENCIAS (Corrección Hidden + Display)
    mostrarSugerencias(inputElement) {
        const texto = inputElement.value;
        const lista = inputElement.nextElementSibling;
        
        if (!lista) return;

        // 1. LIMPIAR: Usamos ambas técnicas (atributo para TAW + estilo para visualización)
        lista.innerHTML = ''; 
        lista.setAttribute('hidden', ''); 
        lista.style.display = 'none';
        inputElement.setAttribute('aria-expanded', 'false'); 

        if (texto.length < 2) {
            this.limpiarMarcas();
            return;
        }

        const termino = texto.toLowerCase();
        // Fallback por si acaso el diccionario no está listo
        const textos = this.diccionario[this.idiomaActual] || this.diccionario['es'];
        let hayResultados = false;
        
        const prefijoIdioma = this.idiomaActual.toUpperCase();

        for (const clave in textos) {
            const contenidoOriginal = textos[clave];
            const contenido = contenidoOriginal.toLowerCase();

            // Filtrar claves internas
            if (contenido.includes(termino) && 
                !clave.startsWith("tooltip") && 
                !clave.startsWith("placeholder") && 
                !clave.startsWith("msg_enviado") && 
                !clave.startsWith("msg_sin_resultados")
            ) {
                
                const archivoDestino = this.determinarPagina(clave);
                const clavePagina = archivoDestino.replace(".html", "_nombre");
                let nombreTraducidoPagina = textos[clavePagina] || this.nombresBonitos[archivoDestino] || "Web";
                
                const li = document.createElement('li');
                li.dataset.destino = archivoDestino;
                li.dataset.busqueda = texto;
                
                const button = document.createElement('button');
                button.setAttribute('role', 'option'); 
                // Estilos JS básicos para asegurar funcionalidad del botón dentro del li
                button.style.width = "100%";
                button.style.textAlign = "left";
                button.style.background = "none";
                button.style.border = "none";
                button.style.cursor = "pointer";
                
                button.setAttribute('aria-label', `Buscar "${termino}" en la página de ${nombreTraducidoPagina}`);
                button.onclick = () => this.seleccionarSugerencia(button);

                const textoResaltado = contenidoOriginal.replace(new RegExp(`(${termino})`, 'gi'), "<mark>$1</mark>");
                
                button.innerHTML = `
                    <strong>${textoResaltado}</strong>
                    <small style="display:block; font-size:0.8em; color:#666;">${prefijoIdioma}: ${nombreTraducidoPagina}</small>
                `;

                li.appendChild(button);
                lista.appendChild(li);
                hayResultados = true;
            }
        }

        if (hayResultados) {
            // 2. MOSTRAR: Quitamos el hidden Y forzamos el display block
            lista.removeAttribute('hidden');
            lista.style.display = 'block';
            inputElement.setAttribute('aria-expanded', 'true');
        } else {
            const mensajeSinResultados = textos["msg_sin_resultados"] || 'No results found...';
            const li = document.createElement('li');
            li.innerHTML = `<small style='color:grey; padding: 5px 10px; display:block;'>${mensajeSinResultados}</small>`;
            lista.appendChild(li);
            
            // 3. MOSTRAR MENSAJE DE ERROR TAMBIÉN
            lista.removeAttribute('hidden');
            lista.style.display = 'block';
            inputElement.setAttribute('aria-expanded', 'true');
        }

        // Búsqueda local sin scroll (mientras escribe)
        this.buscarLocal(texto, false);
    }

    determinarPagina(clave) {
        if (clave.includes("estudios") || clave.startsWith("edu_") || clave.startsWith("exp_") || clave.startsWith("label_")) return "estudios.html";
        if (clave.includes("aficiones") || clave.startsWith("afic_") || clave.startsWith("sec_")) return "aficiones.html";
        if (clave.includes("contacto") || clave.startsWith("redes_") || clave.startsWith("msg_") || clave.startsWith("form_") || clave.startsWith("ref_") || clave.startsWith("status_") || clave.startsWith("text_") || clave.startsWith("btn_")) return "contacto.html";
        return "index.html"; 
    }

    irAPagina(destino, texto) {
        // Obtenemos el nombre del archivo actual de forma segura
        const path = window.location.pathname;
        const paginaActual = path.substring(path.lastIndexOf('/') + 1) || "index.html";

        // Si ya estamos en la página destino, solo buscamos y scrolleamos
        if (paginaActual === destino || (paginaActual === "" && destino === "index.html")) {
            this.buscarLocal(texto, true);
        } else {
            // Si es otra página, redirigimos pasando el parámetro q
            window.location.href = `${destino}?q=${encodeURIComponent(texto)}`;
        }
    }

    verificarBusquedaURL() {
        const params = new URLSearchParams(window.location.search);
        const busqueda = params.get('q');
        
        if (busqueda) {
            setTimeout(() => {
                const input = document.querySelector('nav input[type="text"]');
                if (input) {
                    input.value = busqueda;
                    this.buscarLocal(busqueda, true);
                }
                // Limpiar URL para que quede bonita
                const urlLimpia = window.location.pathname; 
                history.replaceState(null, '', urlLimpia);
            }, 300);
        }
    }

    limpiarMarcas() {
        const marcas = document.querySelectorAll('main mark');
        marcas.forEach(marca => {
            const padre = marca.parentNode;
            const texto = document.createTextNode(marca.textContent);
            padre.replaceChild(texto, marca);
            padre.normalize();
        });
    }

    // 🚀 BÚSQUEDA LOCAL CON SCROLL SUAVE
    buscarLocal(texto, hacerScroll = true) {
        const main = document.querySelector('main');
        if (!main) return;

        this.limpiarMarcas();

        if (!texto || texto.length < 2) return;

        // Escapar caracteres especiales regex para evitar crash si buscan "?"
        const textoSafe = texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${textoSafe})`, "gi");
        let encontrado = false;

        const recorrer = (elemento) => {
            if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(elemento.tagName)) return;

            if (elemento.hasChildNodes()) {
                Array.from(elemento.childNodes).forEach(recorrer);
            } 
            
            if (elemento.nodeType === Node.TEXT_NODE && elemento.nodeValue.trim() !== "") {
                if (regex.test(elemento.nodeValue)) {
                    const span = document.createElement('span');
                    span.innerHTML = elemento.nodeValue.replace(regex, '<mark>$1</mark>');
                    elemento.parentNode.replaceChild(span, elemento);
                    encontrado = true;
                }
            }
        };

        recorrer(main);

        if (encontrado && hacerScroll) {
            setTimeout(() => {
                const primerMark = document.querySelector('main mark');
                if (primerMark) {
                    // Si está dentro de un <details> (acordeón), abrirlo
                    let padre = primerMark.parentElement;
                    while (padre) {
                        if (padre.tagName === 'DETAILS') {
                            padre.open = true;
                        }
                        padre = padre.parentElement;
                    }

                    // Calcular posición del scroll restando el header fijo
                    const alturaMenuFijo = 120; // Ajusta según la altura real de tu <nav>
                    const rect = primerMark.getBoundingClientRect();
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const destinoY = rect.top + scrollTop - alturaMenuFijo;

                    window.scrollTo({
                        top: destinoY,
                        behavior: "smooth"
                    });
                    
                    // Efecto visual extra (Highlight momentáneo)
                    primerMark.style.transition = "background-color 0.5s";
                    primerMark.style.backgroundColor = "#ff9900"; // Naranja fuerte
                    setTimeout(() => {
                        primerMark.style.backgroundColor = ""; // Volver a amarillo CSS
                    }, 1500);
                }
            }, 100);
        }
    }

    _actualizarVista() {
        document.documentElement.lang = this.idiomaActual;

        document.querySelectorAll("[data-translate]").forEach(el => {
            const k = el.getAttribute("data-translate");
            if (this.diccionario[this.idiomaActual] && this.diccionario[this.idiomaActual][k]) {
                el.innerHTML = this.diccionario[this.idiomaActual][k];
            }
        });

        document.querySelectorAll("[data-translate-tooltip]").forEach(el => {
            const k = el.getAttribute("data-translate-tooltip");
            if (this.diccionario[this.idiomaActual] && this.diccionario[this.idiomaActual][k]) {
                el.title = this.diccionario[this.idiomaActual][k];
            }
        });

        const input = document.querySelector('nav input[type="text"]');
        if (input && this.diccionario[this.idiomaActual]) {
            input.placeholder = this.diccionario[this.idiomaActual]["placeholder_buscar"];
        }
    }
}

// Instanciar la clase al final
const miWeb = new GestorIdiomas();