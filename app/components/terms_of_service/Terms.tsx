"use client";

import { ReactNode } from "react";

const Terms = () => {
  const IndexItem = ({ title, href }: { title: string; href: string }) => {
    return (
      <li className="bg-slate-700 text-white rounded-md p-2 w-full my-2 font-bold">
        <a className="text-white" href={href}>
          {title}
        </a>
      </li>
    );
  };

  const ContentItem = ({
    title,
    children,
    index,
  }: {
    title: string;
    children: ReactNode;
    index: string;
  }) => {
    return (
      <div id={index} className="my-4 text-white">
        <h2 className=" text-lg font-bold bg-primary_pink rounded-md p-2 text-white">
          {index + ". " + title}
        </h2>
        <div className=" space-y-4 mt-3">{children}</div>
      </div>
    );
  };

  return (
    <div className="h-full bg-primary_white mb-20  text-primary_black">
      <div className="absolute top-0 right-0 w-full h-1/5 bg-primary_pink z-0" />
      <div className="w-2/3 flex flex-col mx-auto py-20 whitespace-pre-line">
        <div className="w-full text-center text-xl font-bold text-white">
          {" "}
          Términos y Condiciónes
        </div>
        <div className="mb-4">
          <strong className="text-white">Index</strong>
          <ul>
            <IndexItem title="1. Bienvenida e introducción" href="#1" />
            <IndexItem
              title="2. ¿Quiénes somos y qué es Empleo Digno?"
              href="#2"
            />
            <IndexItem title="3. Explorando nuestros Servicios" href="#3" />
            <IndexItem
              title="4. Tu Licencia para usar Empleo Digno"
              href="#4"
            />
            <IndexItem title="5. Limitaciones de edad" href="#5" />
            <IndexItem
              title="6. Tus Responsabilidades: Cómo usar Empleo Digno correctamente"
              href="#6"
            />
            <IndexItem
              title="7. Entendiendo nuestras limitaciones de responsabilidad"
              href="#7"
            />
            <IndexItem title="8. Cómo nos comunicamos contigo" href="#8" />
            <IndexItem title="9. Cómo puedes cancelar tu cuenta" href="#9" />
            <IndexItem title="10. Manteniéndote al día" href="#10" />
            <IndexItem
              title="11. Cómo resolvemos nuestras diferencias"
              href="#11"
            />
          </ul>
        </div>
        <ContentItem title="Bienvenida e introducción" index="1">
          <p>
            En Empleo Digno, nos dedicamos a brindarte una experiencia única en
            tu búsqueda y desarrollo profesional. Estamos comprometidos a
            acompañarte en cada paso de tu camino hacia el crecimiento laboral,
            asegurándonos de que cada interacción con nuestra plataforma sea
            significativa y enriquecedora. Por eso, hemos preparado este
            documento que establece las reglas para usar nuestros servicios e
            interactuar con nuestra plataforma tecnológica. Te invitamos a leer
            con atención los Términos de Uso de nuestra plataforma.
          </p>
          <p>
            Nuestra misión es conectar a profesionales al implementar un
            innovador sistema de &quot;Matchmaking Inteligente&quot; que utiliza
            la Inteligencia Artificial para emparejar a nuestros usuarios con
            oportunidades de empleo. De igual forma, se fomenta un seguimiento
            de crecimiento laboral a través de cursos, capacitaciones y
            certificaciones, así, no solo fomentamos el desarrollo profesional,
            sino que también garantizamos una conexión efectiva entre candidatos
            y empleadores, creando un entorno de confianza y colaboración para
            el progreso profesional.
          </p>
          <p>
            Por medio de este Contrato de Adhesión te informamos las reglas y
            términos de uso de nuestros servicios. En otras palabras, este
            contrato establece por un lado tus derechos y responsabilidades como
            consumidor al usar nuestra webapp (&quot;Plataforma&quot;) y sus
            herramientas de productividad (&quot;Espacio de Trabajo&quot;), así
            como la Bolsa de Trabajo de Empleo Digno, y por otro lado establece
            los derechos y obligaciones de Empleo Digno como proveedor de dichos
            servicios.
          </p>
          <p>
            Al usar nuestros Servicios, aceptas este Contrato y los Términos de
            Uso aquí contenidos. Tu uso también está sujeto a nuestra Política
            de Cookies y Política de Privacidad, que explican cómo manejamos tu
            información personal. Para más detalles, visita{" "}
            <a
              href="http://www.empleodigno.com"
              className="text-indigo-500 cursor-pointer hover:text-blue-600"
            >
              www.empleodigno.com
            </a>
          </p>
          <p>
            Al seleccionar &quot;Unirse ahora&quot;, &quot;Registrarse&quot;, o
            un enlace similar, y al usar nuestros Servicios, estás aceptando un
            contrato legalmente vinculante con Empleo Digno. Si no estás de
            acuerdo con los Términos de Uso aquí contenidos, por favor no
            procedas con el registro ni uses nuestros servicios. Si has aceptado
            este Contrato por error, o simplemente ya no quieres usar nuestros
            servicios, recuerda que puedes terminar este contrato en cualquier
            momento cerrando tu Cuenta.
          </p>
        </ContentItem>
        <ContentItem title="¿Quiénes somos y qué es Empleo Digno?" index="2">
          <p>
            En la Plataforma de Empleo Digno, existen dos categorías principales
            de usuarios: los &quot;Usuarios&quot; y los &quot;Clientes&quot;.
            Los Usuarios son aquellos individuos que se unen a nuestra bolsa de
            trabajo en búsqueda de oportunidades laborales; ellos acceden a
            diversas vacantes y pueden gestionar su perfil profesional dentro de
            la Plataforma. Dichos Términos de Uso se refieren exclusivamente a
            los Usuarios. En caso de querer leer el documento pertinente a los
            Clientes, por favor visita{" "}
            <a
              href="http://www.empleodigno.com"
              className="text-indigo-500 cursor-pointer hover:text-blue-600"
            >
              www.empleodigno.com
            </a>
          </p>
          <p>
            Estos Términos y Condiciones representan un acuerdo legal entre
            usted, como usuario actual o potencial, y Empleo Digno, el nombre
            comercial del Instituto de Formación Digital, S.C., representado por
            Roberto Lara Limón, con domicilio establecido en Av. Insurgentes Sur
            1216 Piso 8, Despachos 2-5, Col. Del Valle, Alcaldía Benito Juárez,
            C.P. 03100, Ciudad de México. Ellos rigen el uso de nuestros
            servicios a través de nuestra Plataforma en línea. Al acceder o
            utilizar nuestra Plataforma, usted se compromete a seguir estos
            Términos, así como nuestras políticas y principios. Esto incluye
            respetar las normativas legales relevantes en tu jurisdicción.
          </p>
          <p>
            &quot;Empleo Digno&quot; es una marca cuyo registro ha sido
            solicitado por el Instituto de Formación Digital, S.C. ante el IMPI.
            Como tal, todos sus derechos de propiedad intelectual se encuentran
            reservados y no pueden usarse sin consentimiento expreso del
            Instituto de Formación Digital, S.C. Para obtener más detalles sobre
            nuestra propiedad intelectual, les invitamos a consultar nuestro
            Aviso de Propiedad Intelectual.
          </p>
        </ContentItem>
        <ContentItem title="Explorando nuestros Servicios" index="3">
          <p>
            Empleo Digno se distingue por su Plataforma integral de servicios
            profesionales en línea. Esta plataforma cubre desde el diagnóstico
            de necesidades de formación hasta el reclutamiento y selección de
            talento. Además, facilita la inducción y capacitación, apoya el
            desarrollo continuo de los colaboradores con planes de carrera
            personalizados y ofrece acceso a una extensa bolsa de trabajo para
            el público general. La Plataforma está diseñada para ser un recurso
            completo en el ámbito del desarrollo profesional y la gestión del
            talento.
          </p>
          <p>
            La Plataforma, diseñada y operada con Inteligencia Artificial,
            optimiza las distintas etapas de atracción y gestión de talento en
            las empresas. Esto incluye reclutamiento, entrenamiento, retención,
            planificación de carrera y administración de recursos humanos. La
            Plataforma también proporciona oportunidades de empleo y
            capacitación, enfocándose principalmente en empresas AAA en México e
            Hispanoamérica.
          </p>
          <p>
            Para ofrecer una mejor comprensión y claridad, a continuación,
            presentamos las definiciones clave que serán fundamentales para el
            uso de la Plataforma:
          </p>
          <ul className="space-y-2 ml-10 list-disc">
            <li>
              <strong>Términos de Uso o Términos:</strong> Se refiere al
              contenido del contrato de adhesión, y su función es definir las
              reglas y condiciones bajo las cuales tú, como Usuario, puedes
              utilizar la Plataforma.
            </li>
            <li>
              <strong>Contrato de Adhesión:</strong> Se refiere a este contrato
              en específico, el cual es un tipo de contrato preestablecido en el
              que los términos de uso son fijados por Empleo Digno. Dichos
              términos de uso no pueden ser modificados ni negociados por los
              Usuarios.
            </li>
            <li>
              <strong>Empleo Digno:</strong> Es el nombre comercial del
              Instituto de Formación Digital, S.C., representado por Roberto
              Lara Limón, con domicilio establecido en Av. Insurgentes Sur 1216
              Piso 8, Despachos 2-5, Col. Del Valle, Alcaldía Benito Juárez,
              C.P. 03100, Ciudad de México.
            </li>
            <li>
              <strong>WebApp/Plataforma:</strong> Se refiere a una aplicación
              web diseñada para proporcionar una experiencia integral y dinámica
              en la gestión de talento profesional. Esta herramienta en línea
              facilita diversas funciones como el reclutamiento, la
              capacitación, y el desarrollo de carreras, utilizando tecnologías
              avanzadas como la Inteligencia Artificial para personalizar y
              optimizar la experiencia del usuario. Funciona directamente a
              través de un navegador web, permitiendo un acceso fácil y
              eficiente a los Servicios de Empleo Digno sin la necesidad de
              descargar software adicional.
            </li>
            <li>
              <strong>Servicios:</strong> Los servicios a los que tendrás acceso
              son aquellos relacionados con la Bolsa de Trabajo de la
              Plataforma, los cuales incluyen la creación de un perfil de
              usuario con credenciales de acceso privadas, la carga de archivos
              digitales relacionados con la experiencia profesional y formación
              académica y/o técnica, y la posibilidad de visualizar
              oportunidades de vacantes laborales y de enviar tu perfil y/o tu
              currículum a las empresas y/o personas responsables de las
              vacantes publicadas.
            </li>
            <li>
              <strong>Inteligencia Artificial:</strong> La inteligencia
              artificial, conocida como IA o AI, por sus siglas en inglés, es
              una disciplina dentro de la informática que se centra en el
              desarrollo de sistemas y programas capaces de realizar tareas que
              normalmente requieren de la inteligencia humana. La IA busca
              emular características y capacidades propias del ser humano, como
              razonamiento, el aprendizaje, la percepción, el reconocimiento de
              patrones y la toma de decisiones. Los sistemas de IA utilizan
              algoritmos y modelos matemáticos para procesar grandes volúmenes
              de datos y generar resultados o acciones de forma autónoma.
            </li>
            <li>
              <strong>Matchmaking Inteligente:</strong> Se realiza usando la
              herramienta de aprendizaje automático, también conocido como
              machine learning en inglés, la cual es una rama de la IA que se
              ocupa de desarrollar algoritmos y modelos que permiten a las
              máquinas aprender y mejorar automáticamente a partir de los datos.
            </li>
            <li>
              <strong>Usuario:</strong> se refiere a una persona física que crea
              una cuenta en la plataforma para buscar empleo y no actúa como
              reclutador o empleador.
            </li>
            <li>
              <strong>Cliente:</strong> corresponde a una persona física o
              entidad legal que utiliza la plataforma para publicar anuncios de
              empleo o buscar candidatos, accediendo a través de su cuenta en el
              sitio web.
            </li>
            <li>
              <strong>Cuenta:</strong> Se refiere a un registro personalizado
              creado por ti como Usuario en la Plataforma. Esta Cuenta te
              permite acceder y utilizar nuestros Servicios. Incluye una
              identificación única (como un nombre de usuario o número de
              cuenta) y datos de seguridad (como una contraseña). La Cuenta
              contiene tu información personal y profesional, preferencias e
              historial de actividades.
            </li>
            <li>
              <strong>Espacio de Trabajo:</strong> Se refiere a un área virtual
              personalizada dentro de la Plataforma destinada a un Usuario
              individual. Este Espacio sirve como el principal punto de
              interacción para los Usuarios con los Servicios de la Plataforma.
            </li>
            <li>
              <strong>Licencia:</strong> Define el alcance de cómo se pueden
              usar los servicios, por lo que es importante destacar que es de
              uso temporal, no exclusiva, limitada y revocable, lo que significa
              que Empleo Digno puede terminarla bajo ciertas circunstancias, y
              no permite al Usuario compartir o transferir sus derechos a
              terceros sin consentimiento previo.
            </li>
            <li>
              <strong>Datos Personales:</strong> La información recopilada,
              utilizada y compartida por Empleo Digno que puede identificar o
              hacer identificable a una persona.{" "}
            </li>
          </ul>
          <p>
            En los Servicios de Empleo Digno, abordamos integralmente el ciclo
            de vida profesional de nuestros Usuarios, implementando las
            siguientes soluciones tecnológicas y estrategias innovadoras:
          </p>
          <ul className="space-y-2 ml-10">
            <li>
              a. Diagnóstico: Utilizamos un software avanzado para el análisis y
              sistematización de la información del ciclo de vida del
              colaborador. Este software genera indicadores de eficiencia y
              proporciona reportes detallados sobre las áreas de oportunidad
              identificadas.
            </li>
            <li>
              b. Reclutamiento y Selección: Ofrecemos una selección minuciosa de
              candidatos, incluyendo aquellos preseleccionados de bases de datos
              externas y candidatos anteriormente descartados que han recibido
              capacitación adicional. Además, disponemos de herramientas que
              facilitan la selección de los mejores perfiles para cada vacante.
            </li>
            <li>
              c. Inducción y Capacitación: Implementamos programas de inducción
              virtual para optimizar los tiempos de adaptación, junto con cursos
              digitales de capacitación teórica que agilizan el proceso de
              formación.
            </li>
            <li>
              d. Desarrollo de Colaboradores / Plan de Carrera: Contamos con un
              aula virtual que ofrece formación específica según las necesidades
              de nuestros clientes y un plan de certificaciones internas y
              externas para el desarrollo profesional. Además, proporcionamos
              herramientas para identificar a los candidatos más adecuados para
              promociones internas.
            </li>
            <li>
              e. Público en General: Mantenemos una amplia bolsa de trabajo y
              ofrecemos cursos de capacitación y certificaciones orientadas a
              mejorar la empleabilidad en puestos específicos.
            </li>
          </ul>
        </ContentItem>
        <ContentItem title="Tu Licencia para usar Empleo Digno" index="4">
          <p>
            En Empleo Digno, proporcionamos una Licencia de uso temporal, no
            exclusiva, limitada y revocable a través de nuestra Plataforma. Esta
            Licencia permite a los Clientes a redactar y publicar ofertas de
            trabajo y anuncios, y a los Usuarios publicar sus currículums y
            datos en nuestra Plataforma. Sin embargo, es importante destacar que
            no somos responsables del contenido o la veracidad de las
            publicaciones hechas por empleadores, reclutadores o de la
            información de los candidatos en nuestro sitio web y/o aplicación
            móvil.
          </p>
        </ContentItem>
        <ContentItem title="Limitaciones de edad" index="5">
          <p>
            Todos los servicios de Empleo Digno no están diseñados para menores
            de 18 años. En Empleo Digno, no recabamos intencionadamente
            información personal directa de menores de 18 años. Si tienes
            conocimiento de que estamos procesando Datos Personales de un menor
            de forma inapropiada, te solicitamos de la manera más amable que te
            pongas en contacto con nosotros a través del cuadro de Contacto que
            se encuentra al inicio del Aviso de Privacidad.
          </p>
        </ContentItem>
        <ContentItem
          title="Tus Responsabilidades: Cómo usar Empleo Digno correctamente"
          index="6"
        >
          <p>
            Como Usuario de Empleo Digno, tu responsabilidad es usar la
            Plataforma de manera acorde a su diseño y finalidad. Debes utilizar
            la Plataforma legalmente, siguiendo los Términos de Uso, y
            respetando la moral y el orden público, evitando infringir derechos
            de terceros o dañar el funcionamiento de la plataforma. Está
            prohibido emplear software automatizado para interactuar o descargar
            contenidos. Además, al utilizar nuestros servicios, te comprometes a
            cumplir con todas las leyes aplicables, proporcionar información
            exacta y actualizada, usar tu nombre real y actuar profesional y
            respetuosamente, en línea con el propósito de la Plataforma.
          </p>
          <p>
            Como Usuario de esta Plataforma, es tu responsabilidad ineludible
            adherirte y cumplir con todas las condiciones de uso detalladas a
            continuación. Al acceder, navegar o de cualquier forma utilizar los
            Servicios, reconoces y aceptas que es tu obligación leer, entender y
            seguir los Términos establecidos. Estos Términos están diseñados no
            solo para proteger nuestros derechos, sino también para garantizar
            una experiencia segura, respetuosa y legal para todos los Usuarios.
            El incumplimiento de cualquiera de estas condiciones puede resultar
            en restricciones de tu acceso al Servicio, acciones legales en tu
            contra, o ambos. Por lo tanto, te instamos a tomar este compromiso
            seriamente y a utilizar nuestra Plataforma con la debida diligencia
            y respeto hacia las siguientes condiciones:
          </p>
          <ul className="space-y-2 ml-10 list-disc">
            <li>
              <strong>Crear una sola cuenta:</strong> Es imperativo que sólo
              tengas una cuenta en la Plataforma, evitando duplicidades y
              falsificaciones.
            </li>
            <li>
              <strong>Prohibición de identidades falsas:</strong> En línea con
              la obligación anterior, no se permite crear perfiles que no
              representen tu verdadera identidad, ni que suplanten a otros
              Usuarios.
            </li>
            <li>
              <strong>Uso de software no autorizado:</strong> Está prohibido
              emplear herramientas automatizadas, para replicar o interactuar
              con la Plataforma, incluyendo el minado manual o automático, ni
              “scraping”, de datos.
            </li>
            <li>
              <strong>Eludir seguridad y controles de acceso:</strong> Es tu
              responsabilidad no intentar acceder a áreas restringidas de la
              Plataforma o sobrepasar los límites de uso establecidos, ya que
              esto compromete la seguridad de nuestros Servicios.
            </li>
            <li>
              <strong>Uso inadecuado de información:</strong> La información
              disponible en la Plataforma debe ser utilizada respetando la
              privacidad y los derechos de propiedad industrial, sin hacer un
              uso indebido o sin autorización. Por lo tanto, al usar nuestros
              servicios te comprometes a respetar los términos incluidos en
              nuestro Aviso de Propiedad Intelectual.
            </li>
            <li>
              <strong>Divulgación de información confidencial:</strong> Revelar
              información privada o confidencial de terceros sin su
              consentimiento es una violación grave de la privacidad.
            </li>
            <li>
              <strong>Prohibición de publicar contenido dañino:</strong> No
              debes subir contenido que pueda dañar la plataforma o los
              dispositivos de otros Usuarios, como virus, bots o malware.
            </li>
            <li>
              <strong>Ingeniería inversa:</strong> Intentar desmontar o
              descifrar la Plataforma para entender su funcionamiento interno va
              en contra de los Términos de Uso.
            </li>
            <li>
              <strong>Falsas asociaciones o endosos:</strong> No se debe
              declarar una relación o aprobación con Empleo Digno que no sea
              real o autorizada.
            </li>
            <li>
              <strong>Control competitivo:</strong> No se permite el monitoreo
              de la Plataforma para obtener ventajas competitivas o comerciales.
            </li>
            <li>
              <strong>Prácticas prohibidas de presentación:</strong> No se debe
              imitar el diseño o funcionalidades de Empleo Digno para crear
              servicios similares o engañosos.
            </li>
            <li>
              <strong>Interferencia en los servicios:</strong> Está prohibida
              cualquier acción que interrumpa, degrade o impida el correcto
              funcionamiento de la Plataforma.
            </li>
          </ul>
          <p>
            Al utilizar la Plataforma de Empleo Digno, te comprometes a elegir y
            mantener una contraseña segura, y a no compartir ni transferir
            partes de tu Cuenta, como tus contactos. Eres responsable de
            cualquier actividad en tu Cuenta a menos que la desactives o
            informes a Empleo Digno sobre un uso indebido del cual no eres
            responsable.
          </p>
        </ContentItem>
        <ContentItem
          title="Entendiendo nuestras limitaciones de responsabilidad"
          index="7"
        >
          <p>
            Empleo Digno no se hace responsable de los materiales publicados por
            los usuarios en la Plataforma, ni de sus acciones, omisiones o
            conductas. Asimismo, Empleo Digno no asume responsabilidad por el
            uso de herramientas de análisis y selección de personal, ya que las
            ofertas de trabajo son creadas y gestionadas por cada Cliente o
            reclutador individualmente.
          </p>
          <p>
            Empleo Digno aclara que sus servicios no deben interpretarse como
            outsourcing, agencia de colocación, manejo de nóminas, ni servicios
            similares. Por ende, no se considera patrón sustituto en ninguna
            situación legal. La responsabilidad de los anuncios de empleo y las
            relaciones laborales que surjan a partir de ellos recae
            exclusivamente en quien los publica en nuestra Plataforma.
          </p>
          <p>
            Empleo Digno no actúa como agencia de empleos ni firma de
            reclutamiento. Por lo tanto, no garantiza el éxito o el tiempo
            requerido para obtener empleo para los usuarios. Además, no asegura
            que los materiales publicados en la plataforma conduzcan a la
            contratación de candidatos o al llenado de vacantes. Las decisiones
            de empleo tomadas por los usuarios son de su exclusiva
            responsabilidad y no recaen sobre Empleo Digno.
          </p>
          <p>
            El contenido publicado en la plataforma de Empleo Digno es de
            naturaleza pública y, por ello, no podemos garantizar que esté
            exento de reproducción en otras bolsas de trabajo. Asimismo, no
            aseguramos la veracidad, precisión, actualidad o fiabilidad de los
            materiales publicados por los usuarios, los cuales podrían contener
            inexactitudes o errores tipográficos. El uso de estos materiales es
            bajo el riesgo del Usuario.
          </p>
          <p>
            En Empleo Digno nos reservamos el derecho de admitir, dar de baja o
            editar contenidos de la Plataforma, siempre en línea con la
            legalidad y las buenas costumbres. En línea con lo anterior, Empleo
            Digno no se compromete a evaluar o monitorear activamente el
            contenido publicado, y no asume responsabilidad por errores o
            contenido inapropiado publicado por los Usuarios o Clientes en la
            Plataforma.
          </p>
          <p>
            Es responsabilidad de los Clientes asegurarse de que los anuncios de
            empleo publicados en la Plataforma cumplan con las leyes locales,
            especialmente en materia de no discriminación. Esto incluye evitar
            restricciones basadas en características como origen étnico, género,
            edad, discapacidad, condición social o económica, salud, religión,
            apariencia física, preferencias sexuales, entre otros. El objetivo
            es garantizar el respeto a la dignidad humana, promoviendo la
            igualdad de oportunidades en el empleo para todos los Usuarios.
          </p>
          <p>
            Es relevante señalar que al seguir enlaces a sitios web de terceros,
            los Usuarios salen de nuestro entorno seguro y controlado. Cada uno
            de estos sitios externos opera bajo sus propios términos y
            condiciones, sobre los cuales Empleo Digno no tiene influencia ni
            asume responsabilidad. Estos sitios pueden tener prácticas y
            políticas diferentes a las nuestras, y al interactuar con ellos, los
            Usuarios se someten a sus respectivos términos. Por lo tanto, te
            recomendamos revisar cuidadosamente los términos y condiciones de
            estos sitios para entender cómo operan y cómo podrían afectar tu
            experiencia y tus derechos como Usuario.
          </p>
        </ContentItem>
        <ContentItem title="Cómo nos comunicamos contigo" index="8">
          <p>
            El uso de la Plataforma de Empleo Digno conlleva la aceptación de
            los usuarios a recibir notificaciones por diversos medios, como
            notificaciones de escritorio, mensajes de WhatsApp, correos
            electrónicos, entre otros. Esto se realiza utilizando los Datos
            Personales proporcionados en la Plataforma. La aceptación de estas
            notificaciones es un elemento fundamental de tu experiencia como
            Usuario en la Plataforma, ya que permite una comunicación efectiva
            de actualizaciones, alertas y otros mensajes importantes.
          </p>
          <p>
            Es tu responsabilidad mantener actualizada su dirección de correo
            electrónico y número de teléfono en su cuenta. Las notificaciones
            electrónicas tienen la misma validez que las impresas y se
            consideran recibidas dentro de las 24 horas de su envío por correo
            electrónico, WhatsApp, o publicación en la plataforma. En caso de
            que la dirección de correo electrónico proporcionada no sea válida,
            el intento de envío de dicha notificación se considerará como una
            notificación efectiva.
          </p>
        </ContentItem>
        <ContentItem title="Cómo puedes cancelar tu cuenta" index="9">
          <p>
            Este Contrato puede ser finalizado por cualquiera de las partes,
            incluida la cancelación de la cuenta por parte del usuario,
            manteniendo ciertos derechos y obligaciones después de su
            conclusión. Tú o Empleo Digno pueden terminar este contrato en
            cualquier momento, ya sea mediante notificación a la otra parte o
            por cancelación de tu Cuenta. A pesar de la rescisión y la pérdida
            de acceso a los servicios, ciertas cláusulas seguirán en vigor, como
            aquellas relacionadas con propiedad intelectual y disposiciones
            legales que, por su naturaleza, deben permanecer activas tras la
            finalización del contrato.{" "}
          </p>
          <p>
            Empleo Digno se reserva el derecho de cancelar cuentas de Usuarios
            que no cumplan con sus responsabilidades y deberes. Esta medida
            busca preservar la integridad de la Plataforma y la seguridad de
            todos los Usuarios y Clientes, asegurando así un entorno profesional
            y seguro para nuestra comunidad digital.{" "}
          </p>
        </ContentItem>
        <ContentItem title="Manteniéndote al día" index="10">
          <p>
            En Empleo Digno, nos comprometemos a mantener nuestros Términos de
            Uso para garantizar la máxima transparencia y responder
            adecuadamente a diversas situaciones. Estas situaciones incluyen los
            comentarios que recibimos de clientes, reguladores y otros
            interesados en el sector, así como los cambios en nuestros productos
            y en nuestras prácticas.
          </p>
          <p>
            Para mantenerte informado sobre cualquier cambio significativo,
            modificaremos la fecha de “Última actualización” que se encuentra al
            inicio de este contrato. En el caso de que realicemos cambios
            materiales en nuestros términos, o cambios que puedan afectar
            esencialmente la forma en la que Empleo Digno opera, te
            notificaremos publicando un aviso destacado antes de que estos
            cambios entren en vigor o, en su defecto, le enviaremos una
            notificación directa. En cualquier caso, Empleo Digno te solicitará
            que manifiestes estar de acuerdo con dichos cambios; antes de que
            estos te sean aplicables.
          </p>
          <p>
            Te recomendamos revisar periódicamente estos Términos de Uso para
            estar al tanto de cómo Empleo Digno opera y se adapta a las nuevas
            circunstancias.
          </p>
        </ContentItem>
        <ContentItem title="Cómo resolvemos nuestras diferencias" index="11">
          <p>
            En Empleo Digno, cualquier diferencia relacionada con los Términos
            de Uso o con los Servicios será manejada según esta cláusula.
          </p>
          <p>
            Si tenemos algún desacuerdo o problema relacionado con nuestros
            servicios o términos, primero intentaremos resolverlo juntos de
            manera amistosa. Antes de recurrir a un arbitraje, te comprometes a
            intentar una resolución informal de la disputa, considerando que
            este es un paso obligatorio antes de proceder al arbitraje o
            mediación.
          </p>
          <p>
            Si no encontramos una solución conjunta, al hacer uso de nuestros
            servicios aceptas que en caso de cualquier desacuerdo concedes tui
            consentimiento para llevar el caso a un mediador judicial o arbitro
            en México, según lo decida el Instituto de Formación Digital, S.C.
          </p>
        </ContentItem>
      </div>
    </div>
  );
};

export default Terms;
