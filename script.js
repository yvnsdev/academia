// Importación CORRECTA de Supabase (usa esta línea al inicio de tu archivo)
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Configuración de Supabase (esto debe venir DESPUÉS de la importación)
const supabaseUrl = 'https://updylmxdjybimzsckcrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZHlsbXhkanliaW16c2NrY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjU5ODYsImV4cCI6MjA2OTUwMTk4Nn0.2P3-qK6AZDnJxe8jScKCSbDN0S6Yz11OizU0dgXud5c'
const supabase = createClient(supabaseUrl, supabaseKey)

// Agrega esto al inicio de tu script.js o en un archivo CSS separado
const style = document.createElement('style');
style.textContent = `
  /* Estilos generales para modales y formularios */
.auth-modal {
    max-width: 500px;
    margin: 0 auto;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .auth-tabs {
    display: flex;
    border-bottom: 1px solid #eee;
    color: white;
  }
  
  .auth-tab {
    flex: 1;
    padding: 15px;
    text-align: center;
    background: #f5f5f5;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s;
  }
  .auth-tab:hover {
    color: white;
    background: #a82525 !important;
  }

  .auth-tab.active {
    background: #a82525;
    color: white;
  }
  
  .auth-form {
    padding: 25px;
    display: none;
  }
  
  .auth-form.active {
    display: block;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #333;
  }
  
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border 0.3s;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #a82525;
    outline: none;
  }
  
  .auth-submit {
    width: 100%;
    padding: 12px;
    background: #a82525;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .auth-submit:hover {
    background: #8a1a1a;
  }
  
  /* Estilos para tarjetas de cursos */
  .course-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    margin-bottom: 20px;
  }
  
  .course-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  }
  
  .course-header {
    height: 120px;
    position: relative;
    background: linear-gradient(135deg, #a82525, #8a1a1a);
  }
  
  .course-body {
    padding: 20px;
  }
  
  .course-title {
    margin: 0 0 10px;
    color: #333;
    font-size: 1.4rem;
  }
  
  .course-description {
    color: #666;
    margin: 0 0 15px;
    line-height: 1.5;
  }
  
  .course-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: center;
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 15px;
  }
  
  .course-stats {
    margin-left: auto;
  }
  
  .course-actions {
    display: flex;
    gap: 10px;
  }
  
  .btn-entrar, .btn-edit, .btn-delete {
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .btn-entrar {
    background: #a82525;
    color: white;
  }
  
  /* Estilos para items de guías, tareas y cápsulas */
  .item {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border-left: 4px solid #a82525;
  }
  
  .item.completada {
    opacity: 0.8;
    border-left-color: #71cc2e;
  }
  
  .item h3 {
    margin: 0 0 10px;
    color: #333;
    font-size: 1.2rem;
  }
  
  .meta-info {
    color: #666;
    font-size: 0.9rem;
    margin: 0 0 15px;
  }
  
  .markdown-preview {
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .item-actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }
  
  .edit-btn, .delete-btn {
    padding: 6px 12px;
    font-size: 0.85rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  /* Badges */
  .badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    margin-left: 8px;
  }
  
  .badge-publico {
    background: #71cc2e;
  }
  
  .badge-privado {
    background: #e74c3c;
  }
  
  .badge-owner {
    background: #a82525;
  }
  
  .badge-inactivo {
    background: #a69595;
  }
  
  /* Enlaces */
  .enlaces-container {
    margin: 15px 0;
  }
  
  .enlaces-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 8px;
  }
  
  .enlace-item {
    background: #f5f5f5;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.85rem;
  }
  
  .enlace-item a {
    color: #a82525;
    text-decoration: none;
  }
  
  .enlace-item a:hover {
    text-decoration: underline;
  }
  
  /* Formularios de edición */
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .form-row label {
    min-width: 100px;
  }
  
  /* Enlaces temporales */
  .enlace-input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .enlace-input-group input {
    flex: 1;
    padding: 8px 12px;
  }
  
  .add-enlace-btn {
    background: #a82525;
    color: white;
    border: none;
    border-radius: 4px;
    width: 40px;
    cursor: pointer;
  }
  
  .enlaces-preview {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .enlace-preview {
    background: #f5f5f5;
    padding: 8px 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .enlace-preview a {
    color: #a82525;
    text-decoration: none;
  }
  
  .remove-enlace {
    color: #e74c3c;
    cursor: pointer;
  }
  
  /* Mensajes cuando no hay contenido */
  .no-items {
    text-align: center;
    padding: 30px;
    color: black;
    font-style: italic;
  }
`;
document.head.appendChild(style);

const ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
  ADMIN: 'admin'
};

function mostrarModalAuth() {
  modalContent.innerHTML = `
    <div class="auth-modal">
      <div class="auth-tabs">
        <button class="auth-tab active" data-tab="login">Iniciar Sesión</button>
        <button class="auth-tab" data-tab="register">Registrarse</button>
      </div>
      
      <div id="login-form" class="auth-form active">
        <h3><i class="fas fa-sign-in-alt"></i> Iniciar Sesión</h3>
        <div class="form-group">
          <label for="loginEmail">Email</label>
          <input type="email" id="loginEmail" placeholder="tu@email.com" required>
        </div>
        <div class="form-group">
          <label for="loginPassword">Contraseña</label>
          <input type="password" id="loginPassword" placeholder="Tu contraseña" required>
        </div>
        <button onclick="iniciarSesion()" class="auth-submit">Iniciar Sesión</button>
      </div>
      
      <div id="register-form" class="auth-form">
        <h3><i class="fas fa-user-plus"></i> Registrarse</h3>
        <div class="form-group">
          <label for="registerName">Nombre Completo</label>
          <input type="text" id="registerName" placeholder="Nombre y Apellido" required>
        </div>
        <div class="form-group">
          <label for="registerEmail">Email</label>
          <input type="email" id="registerEmail" placeholder="tu@email.com" required>
        </div>
        <div class="form-group">
          <label for="registerPassword">Contraseña</label>
          <input type="password" id="registerPassword" placeholder="Mínimo 6 caracteres" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña</label>
          <input type="password" id="confirmPassword" placeholder="Repite tu contraseña" required>
        </div>
        <button onclick="registrarUsuario()" class="auth-submit">Crear Cuenta</button>
      </div>
    </div>
  `;

  // Manejar cambio entre pestañas
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

      const tabId = tab.getAttribute('data-tab');
      tab.classList.add('active');
      document.getElementById(`${tabId}-form`).classList.add('active');
    });
  });

  modal.style.display = 'block';
}

// Función unificada de inicio de sesión
async function iniciarSesion() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email) {
    alert('El email es obligatorio');
    return;
  }

  try {
    let response;
    if (password) {
      // Inicio de sesión con email y contraseña
      response = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
    } else {
      // Magic link como fallback
      response = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      alert('¡Revisa tu email para el enlace mágico!');
    }

    if (response.error) throw response.error;
    cerrarModal();
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error: ' + error.message);
  }
}

// Modifica la función de registro para asignar rol de estudiante por defecto
async function registrarUsuario() {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const nombreCompleto = document.getElementById('registerName').value.trim();

  if (!email || !password || !nombreCompleto) {
    alert('Email, contraseña y nombre completo son obligatorios');
    return;
  }

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          full_name: nombreCompleto
        }
      }
    });

    if (error) throw error;

    // Asignar rol de estudiante por defecto al registrar
    if (data.user) {
      await asignarRolUsuario(data.user.id, ROLES.STUDENT);
      // Guardar el nombre del usuario en la tabla user_roles
      await supabase
        .from('user_roles')
        .update({ nombre: nombreCompleto })
        .eq('user_id', data.user.id);
    }

    alert('¡Registro exitoso! Por favor verifica tu email e inicia sesión.');

    // Cerrar el modal de registro
    cerrarModal();

    // Mostrar el modal de inicio de sesión
    setTimeout(() => {
      mostrarModalAuth();
    }, 500);

  } catch (error) {
    console.error('Error al registrar:', error);
    alert('Error: ' + error.message);
  }
}

// Función para asignar rol a un usuario
async function asignarRolUsuario(userId, role, nombre = '') {
  const { error } = await supabase
    .from('user_roles')
    .insert([{ user_id: userId, role: role, nombre: nombre }], { onConflict: 'user_id' });

  if (error) throw error;
}

// Función para obtener el rol de un usuario
async function obtenerRolUsuario(userId) {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .single();

    if (error) throw error;

    // Si no encuentra el rol, devuelve 'student' por defecto
    return data?.role || ROLES.STUDENT;
  } catch (error) {
    console.error('Error al obtener rol del usuario:', error);
    return ROLES.STUDENT; // Rol por defecto si hay error
  }
}

// Función de cierre de sesión
document.getElementById('logoutBtn').addEventListener('click', async () => {
  const { error } = await supabase.auth.signOut();

  if (!error) {
    location.reload(); // Recargar para limpiar el estado
  }
});

async function initAuth() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (session) {
      // Usuario logeado
      document.body.classList.add('logged-in');
      document.getElementById('loginBtn').style.display = 'none';
      document.getElementById('logoutBtn').style.display = 'block';

      // Obtener el nombre del usuario
      const { data: userRoleData, error: roleError } = await supabase
        .from('user_roles')
        .select('nombre')
        .eq('user_id', session.user.id)
        .single();

      const nombreUsuario = userRoleData?.nombre || session.user.email.split('@')[0];
      document.getElementById('userEmail').textContent = nombreUsuario;

      // Obtener y manejar el rol del usuario
      const userRole = await obtenerRolUsuario(session.user.id);
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('userId', session.user.id);

      // Mostrar/ocultar elementos según el rol
      manejarVistaSegunRol(userRole);

      // Only load data if we're on a page that needs it
      if (document.getElementById('listaCursos') || document.getElementById('listaGuias') ||
        document.getElementById('listaTareas') || document.getElementById('listaCapsulas')) {
        await cargarDatos(userRole);
      }
    } else {
      // Usuario no logeado
      document.getElementById('loginBtn').style.display = 'block';
      document.getElementById('logoutBtn').style.display = 'none';
      document.getElementById('userEmail').textContent = '';
      localStorage.removeItem('userRole');
      localStorage.removeItem('userId');

      document.body.classList.remove('logged-in');
    }
  } catch (error) {
    console.error('Error en initAuth:', error);
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
  }
}

// Nueva función para actualizar la interfaz
function actualizarInterfazSegunPermisos(userRole) {
  const puedeEditar = userRole === ROLES.TEACHER || userRole === ROLES.ADMIN;

  // Ocultar/mostrar botones de creación
  document.querySelectorAll('.create-btn').forEach(btn => {
    btn.style.display = puedeEditar ? 'block' : 'none';
  });

  // Ocultar/mostrar formularios de creación
  document.querySelectorAll('.form-container').forEach(form => {
    form.style.display = puedeEditar ? 'flex' : 'none';
  });
}

// Función para manejar la vista según el rol
function manejarVistaSegunRol(role) {
  const esProfesor = role === ROLES.TEACHER || role === ROLES.ADMIN;
  const esEstudiante = role === ROLES.STUDENT;

  // Obtener elementos de forma segura
  const agregarCursoBtn = document.getElementById('agregarCurso');
  const formContainer = document.querySelector('.form-container');
  const adminPanel = document.getElementById('admin-panel');
  const courseTitle = document.getElementById('course-title');
  const editBtn = document.getElementById('edit-btn');
  const deleteBtn = document.getElementById('delete-btn');

  // Mostrar/ocultar elementos de creación/edición
  if (agregarCursoBtn) {
    agregarCursoBtn.style.display = esProfesor ? 'block' : 'none';
  }

  if (formContainer) {
    formContainer.style.display = esProfesor ? 'flex' : 'none';
  }

  // Solo intentar acceder al panel de admin si existe
  if (adminPanel) {
    adminPanel.style.display = role === ROLES.ADMIN ? 'block' : 'none';
  }

  if (courseTitle) {
    courseTitle.style.display = esEstudiante ? 'none' : 'block';
  }

  if (editBtn) {
    editBtn.style.display = esEstudiante ? 'none' : 'block';
  }

  if (deleteBtn) {
    deleteBtn.style.display = esEstudiante ? 'none' : 'block';
  }

  // Ocultar formularios de creación en las secciones de curso para estudiantes
  if (esEstudiante) {
    document.querySelectorAll('.curso-seccion .form-container').forEach(form => {
      form.style.display = 'none';
    });
  }
}

async function promocionarUsuario(email, role) {
  try {
    // Primero obtener el ID del usuario por email
    const { data: user, error: userError } = await supabase
      .from('profiles')
      .select('id, full_name')
      .eq('email', email)
      .single();

    if (userError || !user) {
      throw new Error('Usuario no encontrado');
    }

    // Actualizar o crear el rol
    const { error } = await supabase
      .from('user_roles')
      .upsert(
        {
          user_id: user.id,
          role: role,
          nombre: user.full_name
        },
        { onConflict: 'user_id' }
      );

    if (error) throw error;

    alert(`Usuario promocionado a ${role} exitosamente`);
    return true;
  } catch (error) {
    console.error('Error al promocionar usuario:', error);
    alert('Error: ' + error.message);
    return false;
  }
}

// Escuchar cambios de autenticación
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
    initAuth();
  }
});

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  initAuth();

  // Configurar evento del botón de login
  document.getElementById('loginBtn').addEventListener('click', () => {
    mostrarModalAuth();
  });
});

// Variables globales
let cursos = [];
let guias = [];
let tareas = [];
let capsulas = [];
let cursoActual = null;
let archivosTemporales = {
  guia: [],
  tarea: []
};
let enlacesTemporales = {
  guia: [],
  tarea: [],
  editGuia: [],  // Add this for edit mode
  editTarea: []  // Add this for edit mode
};

// Elementos del DOM
const secciones = {
  cursos: document.getElementById('cursos-section'),
  cursoDetalle: document.getElementById('curso-detalle-section'),
  dashboard: document.getElementById('dashboard-section'),
  cursos: document.getElementById('cursos-section'),
  participantes: document.getElementById('participantes-section'),
  calendario: document.getElementById('calendario-section'),
  videochat: document.getElementById('videochat-section'),
  calificaciones: document.getElementById('calificaciones-section')
};

// Sidebar
const sidebarCursos = document.getElementById('sidebar-cursos');

// Modal
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close');

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
  // Cargar datos de Supabase
  await cargarDatos();

  // Mostrar sección de cursos por defecto
  mostrarSeccion('cursos');

  // CRUD Cursos
  document.getElementById('agregarCurso').addEventListener('click', agregarCurso);
  document.getElementById('volverCursos').addEventListener('click', () => mostrarSeccion('cursos'));

  // Navegación dentro del curso
  document.getElementById('btnGuias').addEventListener('click', () => mostrarSeccionCurso('guias'));
  document.getElementById('btnTareas').addEventListener('click', () => mostrarSeccionCurso('tareas'));
  document.getElementById('btnCapsulas').addEventListener('click', () => mostrarSeccionCurso('capsulas'));

  // CRUD Guías
  document.getElementById('agregarGuia').addEventListener('click', agregarGuia);

  // CRUD Tareas
  document.getElementById('agregarTarea').addEventListener('click', agregarTarea);

  // CRUD Cápsulas
  document.getElementById('agregarCapsula').addEventListener('click', agregarCapsula);
  document.getElementById('capsulaTipo').addEventListener('change', actualizarFormularioCapsula);

  // Modal
  closeModal.addEventListener('click', cerrarModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });
});

// Funciones de navegación (sin cambios)
function mostrarSeccion(seccion) {
  // Ocultar todas las secciones primero
  Object.keys(secciones).forEach(key => {
    if (secciones[key]) {
      secciones[key].classList.remove('active');
    }
  });

  // Mostrar la sección seleccionada
  if (secciones[seccion]) {
    secciones[seccion].classList.add('active');
  }

  // Renderizar contenido específico de cada sección
   switch (seccion) {
    case 'cursos':
      renderizarCursos();
      break;
    case 'participantes':
      renderizarParticipantes();
      break;
    case 'calendario':
      renderizarCalendario();
      break;
    case 'videochat':
      renderizarVideochat();
      break;
    case 'calificaciones':
      renderizarCalificaciones();
      break;
    case 'curso-detalle':
      if (cursoActual) {
        renderizarGuias();
        renderizarTareas();
        renderizarCapsulas();
      }
      break;
  }
  // Actualizar URL
  window.location.hash = seccion;
}

function mostrarSeccionCurso(seccion) {
  document.querySelectorAll('.curso-nav button').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(`btn${seccion.charAt(0).toUpperCase() + seccion.slice(1)}`).classList.add('active');

  document.querySelectorAll('.curso-seccion').forEach(sec => {
    sec.classList.remove('active');
  });
  document.getElementById(`${seccion}-section`).classList.add('active');
}

// Modifica la función cargarDatos para considerar el rol
async function cargarDatos(userRole) {
  try {
    const user = await getCurrentUser();
    if (!user) return;

    // Cargar cursos (todos los cursos para todos los usuarios logueados)
    const { data: cursosData, error: cursosError } = await supabase
      .from('cursos')
      .select('*');

    if (!cursosError) cursos = cursosData || [];

    // Cargar guías, tareas y cápsulas con filtros según el rol
    const { data: guiasData, error: guiasError } = await supabase
      .from('guias')
      .select('*');

    if (!guiasError) guias = guiasData || [];

    const { data: tareasData, error: tareasError } = await supabase
      .from('tareas')
      .select('*');

    if (!tareasError) tareas = tareasData || [];

    const { data: capsulasData, error: capsulasError } = await supabase
      .from('capsulas')
      .select('*');

    if (!capsulasError) capsulas = capsulasData || [];

    // Actualizar estadísticas
    renderizarCursos();
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Modificar la función agregarCurso para validar rol
async function agregarCurso() {
  if (!puedeCrearContenido()) {
    alert('No tienes permisos para crear cursos');
    return;
  }

  const nombre = document.getElementById('cursoNombre').value.trim();
  const descripcion = document.getElementById('cursoDescripcion').value.trim();
  const color = document.getElementById('cursoColor').value;

  if (!nombre) {
    alert('El nombre del curso es obligatorio');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para crear un curso');
      return;
    }

    const { data, error } = await supabase
      .from('cursos')
      .insert([
        {
          nombre,
          descripcion,
          color,
          user_id: user.id
        }
      ])
      .select();

    if (error) throw error;

    if (data && data.length > 0) {
      cursos.push(data[0]);
      renderizarCursos();

      // Limpiar formulario
      document.getElementById('cursoNombre').value = '';
      document.getElementById('cursoDescripcion').value = '';
    }
  } catch (error) {
    console.error('Error al agregar curso:', error);
    alert('Error al crear el curso');
  }
}

async function actualizarCurso(id) {
  const tienePermiso = await verificarPermisosEdicion('cursos', id);
  if (!tienePermiso) {
    alert('No tienes permisos para editar este curso');
    return;
  }

  const nombre = document.getElementById('editCursoNombre').value.trim();
  const descripcion = document.getElementById('editCursoDescripcion').value.trim();
  const color = document.getElementById('editCursoColor').value;

  if (!nombre) {
    alert('El nombre del curso es obligatorio');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para actualizar un curso');
      return;
    }

    // Modificado para usar .select() y obtener los datos actualizados
    const { data, error } = await supabase
      .from('cursos')
      .update({ nombre, descripcion, color })
      .eq('id', id)
      .eq('user_id', user.id)
      .select(); // Añade esto para obtener los datos actualizados

    if (error) throw error;

    // Actualizar localmente con los datos devueltos por Supabase
    if (data && data.length > 0) {
      const index = cursos.findIndex(c => c.id === id);
      if (index !== -1) {
        cursos[index] = data[0]; // Usar los datos devueltos por Supabase
        renderizarCursos();
        cerrarModal();

        if (cursoActual && cursoActual.id === id) {
          cursoActual = data[0]; // Actualizar también el curso actual
          document.getElementById('curso-titulo').textContent = cursoActual.nombre;
          document.getElementById('curso-descripcion').textContent = cursoActual.descripcion || 'Sin descripción';
        }
      }
    }
  } catch (error) {
    console.error('Error al actualizar curso:', error);
    alert('Error al actualizar el curso: ' + error.message);
  }
}

async function eliminarCurso(id) {
  const tienePermiso = await verificarPermisosEdicion('cursos', id);
  if (!tienePermiso) {
    alert('No tienes permisos para eliminar este curso');
    return;
  }

  if (!confirm('¿Estás seguro de que quieres eliminar este curso, todas sus guías, tareas y archivos asociados?')) {
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para eliminar un curso');
      return;
    }

    // 1. Obtener todas las guías y tareas del curso
    const { data: guiasCurso, error: guiasError } = await supabase
      .from('guias')
      .select('id, archivos')
      .eq('curso_id', id);

    const { data: tareasCurso, error: tareasError } = await supabase
      .from('tareas')
      .select('id, archivos')
      .eq('curso_id', id);

    if (guiasError || tareasError) throw guiasError || tareasError;

    // 2. Recolectar todos los paths de archivos a eliminar
    let allPaths = [];
    
    if (guiasCurso) {
      guiasCurso.forEach(guia => {
        if (guia.archivos && guia.archivos.length > 0) {
          allPaths = allPaths.concat(guia.archivos.map(a => a.path));
        }
      });
    }

    if (tareasCurso) {
      tareasCurso.forEach(tarea => {
        if (tarea.archivos && tarea.archivos.length > 0) {
          allPaths = allPaths.concat(tarea.archivos.map(a => a.path));
        }
      });
    }

    // 3. Eliminar todos los archivos del storage
    if (allPaths.length > 0) {
      // Supabase solo permite eliminar hasta 1000 archivos a la vez
      const batchSize = 1000;
      for (let i = 0; i < allPaths.length; i += batchSize) {
        const batch = allPaths.slice(i, i + batchSize);
        const { error: deleteError } = await supabase.storage
          .from('archivos')
          .remove(batch);
        
        if (deleteError) console.error("Error al eliminar archivos:", deleteError);
      }
    }

    // 4. Eliminar el curso y sus relaciones (esto debería estar en cascada)
    const { error } = await supabase
      .from('cursos')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) throw error;

    // 5. Actualizar localmente
    cursos = cursos.filter(c => c.id !== id);
    guias = guias.filter(g => g.curso_id !== id);
    tareas = tareas.filter(t => t.curso_id !== id);
    capsulas = capsulas.filter(c => c.curso_id !== id);
    
    if (cursoActual && cursoActual.id === id) {
      cursoActual = null;
    }
    
    renderizarCursos();

  } catch (error) {
    console.error('Error al eliminar curso:', error);
    alert('Error al eliminar el curso: ' + error.message);
  }
}

// Modificar la función agregarGuia
async function agregarGuia() {
  if (!cursoActual) return;

  if (!puedeCrearContenido()) {
    alert('No tienes permisos para crear guías');
    return;
  }

  const titulo = document.getElementById('guiaTitulo').value.trim();
  const contenido = document.getElementById('guiaContenido').value.trim();
  const visibilidad = document.getElementById('guiaVisibilidad').value;

  if (!titulo || !contenido) {
    alert('Todos los campos son obligatorios');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para crear una guía');
      return;
    }

    // Primero crear la guía para obtener el ID
    const { data: guiaData, error: guiaError } = await supabase
      .from('guias')
      .insert([
        {
          curso_id: cursoActual.id,
          titulo,
          contenido,
          visibilidad,
          user_id: user.id
        }
      ])
      .select();

    if (guiaError) throw guiaError;

    if (guiaData && guiaData.length > 0) {
      const nuevaGuia = guiaData[0];
      
      // Subir archivos si existen
      if (archivosTemporales.guia.length > 0) {
        const archivosSubidos = await subirArchivos(archivosTemporales.guia, 'guias', nuevaGuia.id);
        
        // Actualizar la guía con los archivos
        const { error: updateError } = await supabase
          .from('guias')
          .update({ archivos: archivosSubidos })
          .eq('id', nuevaGuia.id);
          
        if (updateError) throw updateError;
        
        nuevaGuia.archivos = archivosSubidos;
      }

      guias.push(nuevaGuia);
      renderizarGuias();

      // Limpiar formulario
      document.getElementById('guiaTitulo').value = '';
      document.getElementById('guiaContenido').value = '';
      archivosTemporales.guia = [];
      document.getElementById('guiaArchivosPreview').innerHTML = '';
    }
  } catch (error) {
    console.error('Error al agregar guía:', error);
    alert('Error al crear la guía');
  }
}

// Modificar la función editarGuia
async function actualizarGuia(id) {
  const tienePermiso = await verificarPermisosEdicion('guias', id);
  if (!tienePermiso) {
    alert('No tienes permisos para editar esta guía');
    return;
  }

  const titulo = document.getElementById('editGuiaTitulo').value.trim();
  const contenido = document.getElementById('editGuiaContenido').value.trim();
  const visibilidad = document.getElementById('editGuiaVisibilidad').value;

  if (!titulo || !contenido) {
    alert('Todos los campos son obligatorios');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para actualizar una guía');
      return;
    }

    // Subir nuevos archivos si existen
    let nuevosArchivos = [];
    if (archivosTemporales.editGuia.length > 0) {
      nuevosArchivos = await subirArchivos(archivosTemporales.editGuia, 'guias', id);
    }

    // Obtener archivos existentes
    const { data: guiaExistente } = await supabase
      .from('guias')
      .select('archivos')
      .eq('id', id)
      .single();

    // Combinar archivos existentes con nuevos
    const todosArchivos = [
      ...(guiaExistente?.archivos || []),
      ...nuevosArchivos
    ];

    // Actualizar la guía
    const { data: guiaData, error } = await supabase
      .from('guias')
      .update({
        titulo,
        contenido,
        visibilidad,
        archivos: todosArchivos,
        fecha_actualizacion: new Date().toISOString()
      })
      .eq('id', id)
      .eq('user_id', user.id)
      .select();

    if (error) throw error;

    // Actualizar localmente
    if (guiaData && guiaData.length > 0) {
      const index = guias.findIndex(g => g.id === id);
      if (index !== -1) {
        guias[index] = guiaData[0];
        renderizarGuias();
        cerrarModal();
      }
    }
  } catch (error) {
    console.error('Error al actualizar guía:', error);
    alert('Error al actualizar la guía: ' + error.message);
  }
}

async function eliminarGuia(id) {
  const tienePermiso = await verificarPermisosEdicion('guias', id);
  if (!tienePermiso) {
    alert('No tienes permisos para eliminar esta guía');
    return;
  }

  if (!confirm('¿Estás seguro de que quieres eliminar esta guía y todos sus archivos asociados?')) {
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para eliminar una guía');
      return;
    }

    // 1. Obtener la guía para acceder a los archivos
    const { data: guia, error: fetchError } = await supabase
      .from('guias')
      .select('archivos')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Eliminar archivos del storage si existen
    if (guia.archivos && guia.archivos.length > 0) {
      const pathsToDelete = guia.archivos.map(archivo => archivo.path);
      const { error: deleteError } = await supabase.storage
        .from('archivos')
        .remove(pathsToDelete);
      
      if (deleteError) console.error("Error al eliminar archivos:", deleteError);
    }

    // 3. Eliminar la guía de la base de datos
    const { error } = await supabase
      .from('guias')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) throw error;

    // 4. Actualizar localmente
    guias = guias.filter(g => g.id !== id);
    renderizarGuias();

  } catch (error) {
    console.error('Error al eliminar guía:', error);
    alert('Error al eliminar la guía: ' + error.message);
  }
}

// Modificar la función agregarTarea
async function agregarTarea() {
  if (!cursoActual) return;

  if (!puedeCrearContenido()) {
    alert('No tienes permisos para crear tareas');
    return;
  }

  const titulo = document.getElementById('tareaTitulo').value.trim();
  const descripcion = document.getElementById('tareaDescripcion').value.trim();
  const fechaInput = document.getElementById('tareaFecha').value;
  const puntos = parseInt(document.getElementById('tareaPuntos').value) || 0;

  if (!titulo || !descripcion || !fechaInput) {
    alert('Todos los campos son obligatorios');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para crear una tarea');
      return;
    }

    // Convertir fecha local a UTC
    const fechaLocal = new Date(fechaInput);
    const fechaUTC = new Date(
      Date.UTC(
        fechaLocal.getFullYear(),
        fechaLocal.getMonth(),
        fechaLocal.getDate(),
        fechaLocal.getHours(),
        fechaLocal.getMinutes()
      )
    );

    // Primero crear la tarea para obtener el ID
    const { data: tareaData, error: tareaError } = await supabase
      .from('tareas')
      .insert([
        {
          curso_id: cursoActual.id,
          titulo,
          descripcion,
          fecha_limite: fechaUTC.toISOString(),
          puntos,
          user_id: user.id
        }
      ])
      .select();

    if (tareaError) throw tareaError;

    if (tareaData && tareaData.length > 0) {
      const nuevaTarea = tareaData[0];
      
      // Subir archivos si existen
      if (archivosTemporales.tarea.length > 0) {
        const archivosSubidos = await subirArchivos(archivosTemporales.tarea, 'tareas', nuevaTarea.id);
        
        // Actualizar la tarea con los archivos
        const { error: updateError } = await supabase
          .from('tareas')
          .update({ archivos: archivosSubidos })
          .eq('id', nuevaTarea.id);
          
        if (updateError) throw updateError;
        
        nuevaTarea.archivos = archivosSubidos;
      }

      tareas.push(nuevaTarea);
      renderizarTareas();

      // Limpiar formulario
      document.getElementById('tareaTitulo').value = '';
      document.getElementById('tareaDescripcion').value = '';
      document.getElementById('tareaFecha').value = '';
      document.getElementById('tareaPuntos').value = '10';
      archivosTemporales.tarea = [];
      document.getElementById('tareaArchivosPreview').innerHTML = '';
    }
  } catch (error) {
    console.error('Error al agregar tarea:', error);
    alert('Error al crear la tarea');
  }
}

// Modificar la función editarTarea
async function actualizarTarea(id) {
  const tienePermiso = await verificarPermisosEdicion('tareas', id);
  if (!tienePermiso) {
    alert('No tienes permisos para editar esta tarea');
    return;
  }

  const titulo = document.getElementById('editTareaTitulo').value.trim();
  const descripcion = document.getElementById('editTareaDescripcion').value.trim();
  const fechaInput = document.getElementById('editTareaFecha').value;
  const puntos = parseInt(document.getElementById('editTareaPuntos').value) || 0;
  const completada = document.getElementById('editTareaCompletada').value === 'true';

  if (!titulo || !descripcion || !fechaInput) {
    alert('Todos los campos son obligatorios');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para actualizar una tarea');
      return;
    }

    // Convertir fecha local a UTC
    const fechaLocal = new Date(fechaInput);
    const fechaUTC = new Date(
      Date.UTC(
        fechaLocal.getFullYear(),
        fechaLocal.getMonth(),
        fechaLocal.getDate(),
        fechaLocal.getHours(),
        fechaLocal.getMinutes()
      )
    );

    // Subir nuevos archivos si existen
    let nuevosArchivos = [];
    if (archivosTemporales.editTarea.length > 0) {
      nuevosArchivos = await subirArchivos(archivosTemporales.editTarea, 'tareas', id);
    }

    // Obtener archivos existentes
    const { data: tareaExistente } = await supabase
      .from('tareas')
      .select('archivos')
      .eq('id', id)
      .single();

    // Combinar archivos existentes con nuevos
    const todosArchivos = [
      ...(tareaExistente?.archivos || []),
      ...nuevosArchivos
    ];

    // Actualizar la tarea
    const { data: tareaData, error } = await supabase
      .from('tareas')
      .update({
        titulo,
        descripcion,
        fecha_limite: fechaUTC.toISOString(),
        puntos,
        completada,
        archivos: todosArchivos,
        fecha_actualizacion: new Date().toISOString(),
        fecha_completada: completada ? new Date().toISOString() : null
      })
      .eq('id', id)
      .eq('user_id', user.id)
      .select();

    if (error) throw error;

    // Actualizar localmente
    if (tareaData && tareaData.length > 0) {
      const index = tareas.findIndex(t => t.id === id);
      if (index !== -1) {
        tareas[index] = tareaData[0];
        renderizarTareas();
        cerrarModal();
      }
    }
  } catch (error) {
    console.error('Error al actualizar tarea:', error);
    alert('Error al actualizar la tarea: ' + error.message);
  }
}

async function eliminarTarea(id) {
  const tienePermiso = await verificarPermisosEdicion('tareas', id);
  if (!tienePermiso) {
    alert('No tienes permisos para eliminar esta tarea');
    return;
  }

  if (!confirm('¿Estás seguro de que quieres eliminar esta tarea y todos sus archivos asociados?')) {
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para eliminar una tarea');
      return;
    }

    // 1. Obtener la tarea para acceder a los archivos
    const { data: tarea, error: fetchError } = await supabase
      .from('tareas')
      .select('archivos')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Eliminar archivos del storage si existen
    if (tarea.archivos && tarea.archivos.length > 0) {
      const pathsToDelete = tarea.archivos.map(archivo => archivo.path);
      const { error: deleteError } = await supabase.storage
        .from('archivos')
        .remove(pathsToDelete);
      
      if (deleteError) console.error("Error al eliminar archivos:", deleteError);
    }

    // 3. Eliminar la tarea de la base de datos
    const { error } = await supabase
      .from('tareas')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) throw error;

    // 4. Actualizar localmente
    tareas = tareas.filter(t => t.id !== id);
    renderizarTareas();

  } catch (error) {
    console.error('Error al eliminar tarea:', error);
    alert('Error al eliminar la tarea: ' + error.message);
  }
}

async function toggleCompletada(id) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para actualizar una tarea');
      return;
    }

    const userRole = localStorage.getItem('userRole');
    const userId = user.id;

    // Obtener información completa de la tarea
    const { data: tarea, error: fetchError } = await supabase
      .from('tareas')
      .select(`
        *,
        cursos:curso_id (user_id)
      `)
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;
    if (!tarea) {
      alert('Tarea no encontrada');
      return;
    }

    // Verificar permisos
    let puedeModificar = false;

    // 1. Administradores pueden hacer cualquier cosa
    if (userRole === ROLES.ADMIN) {
      puedeModificar = true;
    }
    // 2. Profesores pueden modificar tareas de sus propios cursos
    else if (userRole === ROLES.TEACHER && tarea.cursos.user_id === userId) {
      puedeModificar = true;
    }
    // 3. Estudiantes solo pueden modificar sus propias tareas
    else if (userRole === ROLES.STUDENT && tarea.estudiante_asignado_id === userId) {
      puedeModificar = true;
    }

    if (!puedeModificar) {
      alert('No tienes permisos para modificar esta tarea');
      return;
    }

    const completada = !tarea.completada;

    // Actualizar en Supabase
    const { error: updateError } = await supabase
      .from('tareas')
      .update({
        completada,
        fecha_completada: completada ? new Date().toISOString() : null,
        fecha_actualizacion: new Date().toISOString(),
        user_id_ultima_modificacion: userId // Registrar quién hizo el cambio
      })
      .eq('id', id);

    if (updateError) throw updateError;

    // Actualizar localmente
    const index = tareas.findIndex(t => t.id === id);
    if (index !== -1) {
      tareas[index] = {
        ...tareas[index],
        completada,
        fecha_completada: completada ? new Date().toISOString() : undefined,
        fecha_actualizacion: new Date().toISOString()
      };
      renderizarTareas();
    }

  } catch (error) {
    console.error('Error al actualizar estado de tarea:', error);
    alert('Error al actualizar la tarea: ' + error.message);
  }
}

// Funciones CRUD para Cápsulas con Supabase
async function agregarCapsula() {
  if (!cursoActual) return;

  if (!puedeCrearContenido()) {
    alert('No tienes permisos para crear cápsulas');
    return;
  }

  const titulo = document.getElementById('capsulaTitulo').value.trim();
  const tipo = document.getElementById('capsulaTipo').value;
  const url = document.getElementById('capsulaUrl').value.trim();
  const descripcion = document.getElementById('capsulaDescripcion').value.trim();
  const duracion = parseInt(document.getElementById('capsulaDuracion').value) || 0;

  if (!titulo || !url) {
    alert('Los campos título y URL son obligatorios');
    return;
  }

  try {
    new URL(url);
  } catch (e) {
    alert('Por favor ingrese una URL válida');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para crear una cápsula');
      return;
    }

    // Insertar la cápsula
    const { data: capsulaData, error: capsulaError } = await supabase
      .from('capsulas')
      .insert([
        {
          curso_id: cursoActual.id,
          titulo,
          tipo,
          url,
          descripcion,
          duracion,
          user_id: user.id
        }
      ])
      .select();

    if (capsulaError) throw capsulaError;

    if (capsulaData && capsulaData.length > 0) {
      capsulas.push(capsulaData[0]);
      renderizarCapsulas();

      // Limpiar formulario
      document.getElementById('capsulaTitulo').value = '';
      document.getElementById('capsulaUrl').value = '';
      document.getElementById('capsulaDescripcion').value = '';
      document.getElementById('capsulaDuracion').value = '10';
    }
  } catch (error) {
    console.error('Error al agregar cápsula:', error);
    alert('Error al crear la cápsula');
  }
}

async function actualizarCapsula(id) {
  const tienePermiso = await verificarPermisosEdicion('capsulas', id);
  if (!tienePermiso) {
    alert('No tienes permisos para editar esta cápsula');
    return;
  }

  const titulo = document.getElementById('editCapsulaTitulo').value.trim();
  const tipo = document.getElementById('editCapsulaTipo').value;
  const url = document.getElementById('editCapsulaUrl').value.trim();
  const descripcion = document.getElementById('editCapsulaDescripcion').value.trim();
  const duracion = parseInt(document.getElementById('editCapsulaDuracion').value) || 0;

  if (!titulo || !url) {
    alert('Los campos título y URL son obligatorios');
    return;
  }

  try {
    new URL(url);
  } catch (e) {
    alert('Por favor ingrese una URL válida');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para actualizar una cápsula');
      return;
    }

    // Actualizar la cápsula con .select()
    const { data: capsulaData, error } = await supabase
      .from('capsulas')
      .update({
        titulo,
        tipo,
        url,
        descripcion,
        duracion,
        fecha_actualizacion: new Date().toISOString()
      })
      .eq('id', id)
      .eq('user_id', user.id)
      .select();

    if (error) throw error;

    // Actualizar localmente con los datos devueltos por Supabase
    if (capsulaData && capsulaData.length > 0) {
      const index = capsulas.findIndex(c => c.id === id);
      if (index !== -1) {
        capsulas[index] = capsulaData[0];
        renderizarCapsulas();
        cerrarModal();
      }
    }
  } catch (error) {
    console.error('Error al actualizar cápsula:', error);
    alert('Error al actualizar la cápsula: ' + error.message);
  }
}

async function eliminarCapsula(id) {
  const tienePermiso = await verificarPermisosEdicion('capsulas', id);
  if (!tienePermiso) {
    alert('No tienes permisos para eliminar esta cápsula');
    return;
  }

  if (!confirm('¿Estás seguro de que quieres eliminar esta cápsula?')) {
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para eliminar una cápsula');
      return;
    }

    // Eliminar la cápsula
    const { error } = await supabase
      .from('capsulas')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) throw error;

    // Actualizar localmente
    capsulas = capsulas.filter(c => c.id !== id);
    renderizarCapsulas();
  } catch (error) {
    console.error('Error al eliminar cápsula:', error);
    alert('Error al eliminar la cápsula');
  }
}

// Por esto:
window.agregarEnlace = function (tipo) {
  const container = document.getElementById(`${tipo}EnlacesContainer`);
  const urlInput = container.querySelector('.enlace-url');
  const textoInput = container.querySelector('.enlace-texto');

  const url = urlInput.value.trim();
  const texto = textoInput.value.trim() || url;

  if (!url) {
    alert('Por favor ingrese una URL válida');
    return;
  }

  try {
    new URL(url);
  } catch (e) {
    alert('Por favor ingrese una URL válida (ej: https://ejemplo.com)');
    return;
  }

  // Initialize array if it doesn't exist
  if (!enlacesTemporales[tipo]) {
    enlacesTemporales[tipo] = [];
  }

  // Add to the temporary links
  enlacesTemporales[tipo].push({ url, texto });

  // Update preview
  actualizarPreviaEnlaces(tipo);

  // Clear inputs
  urlInput.value = '';
  textoInput.value = '';
}

function actualizarPreviaEnlaces(tipo) {
  const previewContainer = document.getElementById(`${tipo}EnlacesPreview`);
  previewContainer.innerHTML = '';

  enlacesTemporales[tipo].forEach((enlace, index) => {
    const enlaceElement = document.createElement('div');
    enlaceElement.className = 'enlace-preview';
    enlaceElement.innerHTML = `
      <a href="${enlace.url}" target="_blank">
        ${obtenerIconoPorExtension(enlace.url)}
        ${enlace.texto}
      </a>
      <i class="fas fa-times remove-enlace" onclick="eliminarEnlaceTemporal('${tipo}', ${index})"></i>
    `;
    previewContainer.appendChild(enlaceElement);
  });
}

function eliminarEnlaceTemporal(tipo, index) {
  // Ensure the array exists
  if (!enlacesTemporales[tipo]) {
    console.error(`enlacesTemporales.${tipo} is not defined`);
    return;
  }

  // Ensure it's an array
  if (!Array.isArray(enlacesTemporales[tipo])) {
    console.error(`enlacesTemporales.${tipo} is not an array`);
    return;
  }

  // Check if index is valid
  if (index < 0 || index >= enlacesTemporales[tipo].length) {
    console.error(`Invalid index ${index} for enlacesTemporales.${tipo}`);
    return;
  }

  // Remove the item
  enlacesTemporales[tipo].splice(index, 1);
  actualizarPreviaEnlaces(tipo);
}

function renderizarCursos() {
  const lista = document.getElementById('listaCursos');
  const sidebarCursos = document.getElementById('sidebar-cursos');

  // Si los elementos no existen, salir temprano
  if (!lista && !sidebarCursos) return;

  // Limpiar contenido existente si los elementos existen
  if (lista) lista.innerHTML = '';
  if (sidebarCursos) sidebarCursos.innerHTML = '';

  if (cursos.length === 0) {
    if (lista) lista.innerHTML = '<p class="no-items">No hay cursos registrados.</p>';
    if (sidebarCursos) sidebarCursos.innerHTML = '<li class="no-items" style="color: white;">No hay cursos</li>';
    return;
  }

  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
  const esAdmin = userRole === ROLES.ADMIN;
  const esProfesor = userRole === ROLES.TEACHER;

  // Función para oscurecer color (para el fondo)
  function oscurecerColor(hex, cantidad) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const nuevoR = Math.max(0, r - cantidad);
    const nuevoG = Math.max(0, g - cantidad);
    const nuevoB = Math.max(0, b - cantidad);
    return `#${nuevoR.toString(16).padStart(2, '0')}${nuevoG.toString(16).padStart(2, '0')}${nuevoB.toString(16).padStart(2, '0')}`;
  }

  cursos.forEach(curso => {
    // Calcular estadísticas del curso
    const totalGuias = guias.filter(g => g.curso_id === curso.id).length;
    const totalTareas = tareas.filter(t => t.curso_id === curso.id).length;
    const totalCapsulas = capsulas.filter(c => c.curso_id === curso.id).length;

    // Determinar permisos
    const esPropietario = curso.user_id === userId;
    const puedeEditar = esAdmin || (esProfesor && esPropietario);
    const puedeEliminar = esAdmin || (esProfesor && esPropietario);

    // Mostrar estado del curso
    const esCursoActivo = cursoActual && cursoActual.id === curso.id;
    const estadoCurso = curso.activo ? '' : '<span class="badge badge-inactivo"></span>';

    // Preparar estilo del encabezado
    const colorCurso = curso.color || '#2582a8';
    const colorOscuro = oscurecerColor(colorCurso, 20);

    const headerStyle = `
      --course-color: ${colorCurso};
      background: 
        radial-gradient(circle at 50% 0, var(--course-color) 25%, transparent 25%),
        radial-gradient(circle at 6.7% 75%, var(--course-color) 25%, transparent 25%),
        radial-gradient(circle at 93.3% 75%, var(--course-color) 25%, transparent 25%);
      background-color: ${colorOscuro};
      background-position: 0 0, 0 30px, 30px 30px;
    `;

    // Crear elemento del curso para la lista principal
    if (lista) {
      const cursoElement = document.createElement('div');
      cursoElement.className = 'course-card';
      cursoElement.innerHTML = `
        <div class="course-header" style="${headerStyle}">
          ${estadoCurso}
          <i style="color: white;" class="fas fa-book-open header-icon"></i>
        </div>
        <div class="course-body">
          <h3 class="course-title">${curso.nombre}</h3>
          ${curso.descripcion ? `<p class="course-description">${curso.descripcion.substring(0, 60)}${curso.descripcion.length > 60 ? '...' : ''}</p>` : ''}
          <div class="course-meta">
            <span><i class="far fa-calendar"></i> ${new Date(curso.fecha_creacion).toLocaleDateString()}</span>
            ${esPropietario ? `<span class="badge badge-owner">Propietario</span>` : ''}
            <span class="course-stats">
              <i class="fas fa-file-alt"></i> ${totalGuias} |
              <i class="fas fa-tasks"></i> ${totalTareas} |
              <i class="fas fa-video"></i> ${totalCapsulas}
            </span>
          </div>
          <div class="course-actions">
            <button onclick="entrarCurso(${curso.id})" class="btn-entrar">
              <i class="fas fa-door-open"></i> Entrar
            </button>
            ${puedeEditar ? `
              <button class="btn-edit" onclick="editarCurso(${curso.id})">
                <i class="fas fa-edit"></i> Editar
              </button>
            ` : ''}
            ${puedeEliminar ? `
              <button class="btn-delete" onclick="eliminarCurso(${curso.id})">
                <i class="fas fa-trash"></i> Eliminar
              </button>
            ` : ''}
          </div>
        </div>
      `;
      lista.appendChild(cursoElement);
    }

    // Item en el sidebar
    if (sidebarCursos) {
      const sidebarItem = document.createElement('li');
      sidebarItem.className = `course-item ${esCursoActivo ? 'active' : ''}`;
      sidebarItem.innerHTML = `
        <i class="fas fa-book" style="color: ${colorCurso}"></i>
        <span>${curso.nombre}</span>
        ${!curso.activo ? '<i class="fas fa-ban" style="margin-left: auto;"></i>' : ''}
      `;
      sidebarItem.addEventListener('click', () => entrarCurso(curso.id));
      sidebarCursos.appendChild(sidebarItem);
    }
  });

  // Actualizar estadísticas en el dashboard
  actualizarEstadisticas();
}

function actualizarEstadisticas() {
  const totalCursos = document.getElementById('total-cursos');
  const totalGuias = document.getElementById('total-guias');
  const totalTareas = document.getElementById('total-tareas');
  const totalCapsulas = document.getElementById('total-capsulas');

  if (totalCursos) totalCursos.textContent = cursos.length;
  if (totalGuias) totalGuias.textContent = guias.length;
  if (totalTareas) totalTareas.textContent = tareas.length;
  if (totalCapsulas) totalCapsulas.textContent = capsulas.length;
}

// Modificar la función renderizarGuias para mostrar archivos
function renderizarGuias() {
  const lista = document.getElementById('listaGuias');
  lista.innerHTML = '';

  if (!cursoActual) return;

  const guiasCurso = guias.filter(g => g.curso_id === cursoActual.id);
  const userRole = localStorage.getItem('userRole');
  const esEstudiante = userRole === ROLES.STUDENT;

  if (guiasCurso.length === 0) {
    lista.innerHTML = '<p class="no-items">No hay guías en este curso. Crea tu primera guía para comenzar.</p>';
    return;
  }

  const guiasOrdenadas = [...guiasCurso].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  guiasOrdenadas.forEach(guia => {
    const guiaElement = document.createElement('div');
    guiaElement.className = 'item';
    guiaElement.innerHTML = `
      <div class="guia-header">
        <h3>${guia.titulo}</h3>
        <span class="badge badge-${guia.visibilidad}">${guia.visibilidad === 'publico' ? 'Público' : 'Privado'}</span>
      </div>
      <p class="meta-info">
        <i class="far fa-calendar"></i> Creado: ${new Date(guia.fecha).toLocaleDateString()} 
        ${guia.fecha_actualizacion ? `| <i class="fas fa-sync-alt"></i> Actualizado: ${new Date(guia.fecha_actualizacion).toLocaleDateString()}` : ''}
      </p>
      <div class="markdown-preview">${previsualizarMarkdown(guia.contenido.substring(0, 200))}${guia.contenido.length > 200 ? '...' : ''}</div>
      
      ${guia.archivos && guia.archivos.length > 0 ? `
        <div class="archivos-container">
          <p><strong><i class="fas fa-paperclip"></i> Archivos adjuntos:</strong></p>
          <div class="archivos-list">
            ${guia.archivos.map(archivo => `
              <div class="archivo-item">
                <a href="${archivo.url}" target="_blank" download="${archivo.nombre}">
                  ${obtenerIconoPorExtension(archivo.nombre)}
                  ${archivo.nombre} (${formatearTamaño(archivo.tamaño)})
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      ${!esEstudiante ? `
        <div class="item-actions">
          <button id="edit-btn" class="edit-btn" onclick="editarGuia(${guia.id})"><i class="fas fa-edit"></i> Editar</button>
          <button id="delete-btn" class="delete-btn" onclick="eliminarGuia(${guia.id})"><i class="fas fa-trash"></i> Eliminar</button>
        </div>
      ` : ''}
    `;
    lista.appendChild(guiaElement);
  });
}

// Modificar la función renderizarTareas para mostrar archivos
function renderizarTareas() {
  const lista = document.getElementById('listaTareas');
  lista.innerHTML = '';

  if (!cursoActual) return;

  const tareasCurso = tareas.filter(t => t.curso_id === cursoActual.id);
  const userRole = localStorage.getItem('userRole');
  const esEstudiante = userRole === ROLES.STUDENT;

  if (tareasCurso.length === 0) {
    lista.innerHTML = '<p class="no-items">No hay tareas en este curso. Crea tu primera tarea para comenzar.</p>';
    return;
  }

  const tareasOrdenadas = [...tareasCurso].sort((a, b) => {
    return new Date(a.fecha_limite) - new Date(b.fecha_limite);
  });

  tareasOrdenadas.forEach(tarea => {
    const fechaLimite = new Date(tarea.fecha_limite);
    const ahora = new Date();
    const diasRestantes = Math.ceil((fechaLimite - ahora) / (1000 * 60 * 60 * 24));

    let estado = '';
    let claseEstado = '';

    if (tarea.completada) {
      estado = `<i class="fas fa-check"></i> Completada`;
      claseEstado = 'completada';
    } else if (fechaLimite < ahora) {
      estado = `<i class="fas fa-exclamation-circle"></i> Vencida`;
      claseEstado = 'vencida';
    } else if (diasRestantes <= 3) {
      estado = `<i class="fas fa-clock"></i> Próxima (${diasRestantes} días)`;
      claseEstado = 'proxima';
    } else {
      estado = `<i class="far fa-clock"></i> Pendiente`;
      claseEstado = 'pendiente';
    }

    const tareaElement = document.createElement('div');
    tareaElement.className = `item ${tarea.completada ? 'completada' : ''} ${claseEstado}`;

    tareaElement.innerHTML = `
      <div class="tarea-header">
        <h3>${tarea.titulo}</h3>
        <span class="badge estado-${claseEstado}">${estado}</span>
      </div>
      <div class="meta-info">
        <span><i class="far fa-calendar-alt"></i> <strong>Fecha límite:</strong> ${formatearFechaLocal(tarea.fecha_limite)}</span>
        <span><i class="fas fa-star"></i> <strong>Puntos:</strong> ${tarea.puntos}</span>
      </div>
      <div class="descripcion">${tarea.descripcion.substring(0, 150)}${tarea.descripcion.length > 150 ? '...' : ''}</div>
      
      ${tarea.archivos?.length > 0 ? `
        <div class="archivos-container">
          <p><strong><i class="fas fa-paperclip"></i> Recursos:</strong></p>
          <div class="archivos-list">
            ${tarea.archivos.map(archivo => `
              <div class="archivo-item">
                <a href="${archivo.url}" target="_blank" download="${archivo.nombre}">
                  ${obtenerIconoPorExtension(archivo.nombre)}
                  ${archivo.nombre} (${formatearTamaño(archivo.tamaño)})
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="item-actions">
        ${esEstudiante ? `
          <button onclick="toggleCompletada(${tarea.id})" class="btn-toggle">
            ${tarea.completada ? '<i class="fas fa-undo"></i> Reabrir' : '<i class="fas fa-check"></i> Completar'}
          </button>
        ` : `
          <button onclick="toggleCompletada(${tarea.id})" class="btn-toggle">
            ${tarea.completada ? '<i class="fas fa-undo"></i> Reabrir' : '<i class="fas fa-check"></i> Completar'}
          </button>
          <button onclick="editarTarea(${tarea.id})" class="btn-edit">
            <i class="fas fa-edit"></i> Editar
          </button>
          <button onclick="eliminarTarea(${tarea.id})" class="btn-delete">
            <i class="fas fa-trash"></i> Eliminar
          </button>
        `}
      </div>
    `;

    lista.appendChild(tareaElement);
  });
}

function renderizarCapsulas() {
  const lista = document.getElementById('listaCapsulas');
  lista.innerHTML = '';

  if (!cursoActual) return;

  const capsulasCurso = capsulas.filter(c => c.curso_id === cursoActual.id);
  const userRole = localStorage.getItem('userRole');
  const esEstudiante = userRole === ROLES.STUDENT;

  if (capsulasCurso.length === 0) {
    lista.innerHTML = '<p class="no-items">No hay cápsulas en este curso. Crea tu primera cápsula para comenzar.</p>';
    return;
  }

  const capsulasOrdenadas = [...capsulasCurso].sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion));

  capsulasOrdenadas.forEach(capsula => {
    let tipoBadge = '';
    let tipoIcono = '';
    if (capsula.tipo === 'video') {
      tipoBadge = '<span class="badge" style="background-color: #e74c3c;"><i class="fas fa-video"></i> Video</span>';
      tipoIcono = '<i class="fas fa-video file-icon"></i>';
    } else if (capsula.tipo === 'articulo') {
      tipoBadge = '<span class="badge" style="background-color: #3498db;"><i class="fas fa-newspaper"></i> Artículo</span>';
      tipoIcono = '<i class="fas fa-newspaper file-icon"></i>';
    } else if (capsula.tipo === 'presentacion') {
      tipoBadge = '<span class="badge" style="background-color: #9b59b6;"><i class="fas fa-file-powerpoint"></i> Presentación</span>';
      tipoIcono = '<i class="fas fa-file-powerpoint file-icon"></i>';
    }

    const capsulaElement = document.createElement('div');
    capsulaElement.className = 'item';
    capsulaElement.innerHTML = `
            <div class="capsula-header">
                <h3>${capsula.titulo}</h3>
                ${tipoBadge}
            </div>
            <p class="meta-info">
                <i class="far fa-calendar"></i> Creado: ${new Date(capsula.fecha_creacion).toLocaleDateString()} 
                ${capsula.fecha_actualizacion ? `| <i class="fas fa-sync-alt"></i> Actualizado: ${new Date(capsula.fecha_actualizacion).toLocaleDateString()}` : ''}
                ${capsula.duracion ? `| <i class="far fa-clock"></i> Duración: ${capsula.duracion} min` : ''}
            </p>
            <p><strong><i class="fas fa-link"></i> URL:</strong> <a href="${capsula.url}" target="_blank">${tipoIcono} ${capsula.url.substring(0, 50)}${capsula.url.length > 50 ? '...' : ''}</a></p>
            ${capsula.descripcion ? `<p>${capsula.descripcion.substring(0, 150)}${capsula.descripcion.length > 150 ? '...' : ''}</p>` : ''}
            
            ${!esEstudiante ? `
              <div class="item-actions">
                  <button id="edit-btn" class="edit-btn" onclick="editarCapsula(${capsula.id})"><i class="fas fa-edit"></i> Editar</button>
                  <button id="delete-btn" class="delete-btn" onclick="eliminarCapsula(${capsula.id})"><i class="fas fa-trash"></i> Eliminar</button>
              </div>
            ` : ''}
        `;
    lista.appendChild(capsulaElement);
  });
}

function entrarCurso(id) {
  cursoActual = cursos.find(c => c.id === id);
  if (!cursoActual) return;

  // Establecer el color del curso como variable CSS
  const colorCurso = cursoActual.color || '#2582a8';
  const colorOscuro = oscurecerColor(colorCurso, 20);
  document.documentElement.style.setProperty('--curso-color', colorCurso);
  document.documentElement.style.setProperty('--curso-color-oscuro', colorOscuro);

  // Actualizar la presentación
  document.getElementById('curso-titulo').textContent = cursoActual.nombre;
  document.getElementById('curso-descripcion').textContent = cursoActual.descripcion || 'Sin descripción';
  
  // Presentación detallada
  document.getElementById('curso-titulo-presentacion').textContent = cursoActual.nombre;
  document.getElementById('curso-descripcion-presentacion').textContent = cursoActual.descripcion || 'Descripción no disponible';
  
  // Obtener información del profesor
  obtenerInfoProfesor(cursoActual.user_id).then(profesor => {
    document.getElementById('curso-profesor').textContent = profesor?.nombre || 'Profesor no disponible';
  });
  
  // Otras informaciones
  document.getElementById('curso-fecha-creacion').textContent = new Date(cursoActual.fecha_creacion).toLocaleDateString();
  
  const guiasCurso = guias.filter(g => g.curso_id === cursoActual.id).length;
  const tareasCurso = tareas.filter(t => t.curso_id === cursoActual.id).length;
  
  document.getElementById('curso-total-guias').textContent = `${guiasCurso} ${guiasCurso === 1 ? 'guía' : 'guías'}`;
  document.getElementById('curso-total-tareas').textContent = `${tareasCurso} ${tareasCurso === 1 ? 'tarea' : 'tareas'}`;
  
  // Objetivos y requisitos (puedes agregar estos campos a tu tabla de cursos en Supabase)
  document.getElementById('curso-objetivos-content').innerHTML = cursoActual.objetivos 
    ? previsualizarMarkdown(cursoActual.objetivos)
    : '<p>No se han definido objetivos para este curso.</p>';
    
  document.getElementById('curso-requisitos-content').innerHTML = cursoActual.requisitos 
    ? previsualizarMarkdown(cursoActual.requisitos)
    : '<p>No hay requisitos previos para este curso.</p>';

  mostrarSeccion('cursoDetalle');
  mostrarSeccionCurso('presentacion'); // Mostrar presentación por defecto

  renderizarGuias();
  renderizarTareas();
  renderizarCapsulas();
  renderizarPresentacionCurso();
}

// Función para obtener información del profesor
async function obtenerInfoProfesor(userId) {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('nombre, email')
      .eq('user_id', userId)
      .single();
      
    return error ? null : data;
  } catch (error) {
    console.error('Error al obtener info del profesor:', error);
    return null;
  }
}

async function editarCurso(id) {
  const tienePermiso = await verificarPermisosEdicion('cursos', id);
  if (!tienePermiso) {
    alert('No tienes permisos para editar este curso');
    return;
  }

  const curso = cursos.find(c => c.id === id);
  if (!curso) return;

  modalContent.innerHTML = `
        <h3><i class="fas fa-edit"></i> Editar Curso</h3>
        <div class="form-container">
            <input type="text" id="editCursoNombre" value="${curso.nombre}" placeholder="Nombre del curso" required>
            <textarea id="editCursoDescripcion" placeholder="Descripción">${curso.descripcion || ''}</textarea>
            <div class="form-row">
                <label for="editCursoColor">Color:</label>
                <input type="color" id="editCursoColor" value="${curso.color || '#2582a8'}">
            </div>
            <button onclick="actualizarCurso(${id})"><i class="fas fa-save"></i> Actualizar Curso</button>
        </div>
    `;

  modal.style.display = 'block';
}

// Modificar la función editarGuia para manejar archivos
function editarGuia(id) {
  const guia = guias.find(g => g.id === id);
  if (!guia) return;

  // Inicializar archivos temporales para edición
  archivosTemporales.editGuia = [];

  modalContent.innerHTML = `
    <h3><i class="fas fa-edit"></i> Editar Guía</h3>
    <div class="form-container">
      <input type="text" id="editGuiaTitulo" value="${guia.titulo}" placeholder="Título de la guía" required>
      <textarea id="editGuiaContenido" placeholder="Contenido (formato Markdown)" required>${guia.contenido}</textarea>
      <div class="form-row">
        <label for="editGuiaVisibilidad">Visibilidad:</label>
        <select id="editGuiaVisibilidad">
          <option value="publico" ${guia.visibilidad === 'publico' ? 'selected' : ''}>Público</option>
          <option value="privado" ${guia.visibilidad === 'privado' ? 'selected' : ''}>Privado</option>
        </select>
      </div>
      <div class="form-group">
        <label for="editGuiaArchivos"><i class="fas fa-paperclip"></i> Agregar archivos (opcional):</label>
        <input type="file" id="editGuiaArchivos" multiple>
        <div id="editGuiaArchivosPreview" class="files-preview"></div>
      </div>
      ${guia.archivos && guia.archivos.length > 0 ? `
        <div class="form-group">
          <label><i class="fas fa-paperclip"></i> Archivos existentes:</label>
          <div class="archivos-existente">
            ${guia.archivos.map((archivo, index) => `
              <div class="archivo-item">
                <a href="${archivo.url}" target="_blank" download="${archivo.nombre}">
                  ${obtenerIconoPorExtension(archivo.nombre)}
                  ${archivo.nombre} (${formatearTamaño(archivo.tamaño)})
                </a>
                <i class="fas fa-times remove-file" onclick="eliminarArchivoExistente('guia', ${guia.id}, ${index})"></i>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      <button onclick="actualizarGuia(${id})"><i class="fas fa-save"></i> Actualizar Guía</button>
    </div>
  `;

  // Configurar el listener para nuevos archivos
  document.getElementById('editGuiaArchivos').addEventListener('change', (e) => {
    manejarSeleccionArchivos(e, 'editGuia');
  });

  modal.style.display = 'block';
}

// Modificar la función editarTarea para manejar archivos
function editarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (!tarea) return;

  // Inicializar archivos temporales para edición
  archivosTemporales.editTarea = [];

  // Convertir UTC a hora local para el input
  let fechaInputValue = '';
  if (tarea.fecha_limite) {
    const fechaUTC = new Date(tarea.fecha_limite);
    fechaInputValue = new Date(
      fechaUTC.getTime() - (fechaUTC.getTimezoneOffset() * 60000)
    ).toISOString().slice(0, 16);
  }

  modalContent.innerHTML = `
    <h3><i class="fas fa-edit"></i> Editar Tarea</h3>
    <div class="form-container">
      <input type="text" id="editTareaTitulo" value="${tarea.titulo}" placeholder="Título de la tarea" required>
      <textarea id="editTareaDescripcion" placeholder="Descripción detallada" required>${tarea.descripcion}</textarea>
      <div class="form-row">
        <label for="editTareaFecha"><i class="far fa-calendar-alt"></i> Fecha límite:</label>
        <input type="datetime-local" id="editTareaFecha" value="${fechaInputValue}" required>
      </div>
      <div class="form-row">
        <label for="editTareaPuntos"><i class="fas fa-star"></i> Puntos:</label>
        <input type="number" id="editTareaPuntos" min="0" value="${tarea.puntos || 10}">
      </div>
      <div class="form-row">
        <label for="editTareaCompletada"><i class="fas fa-check-circle"></i> Estado:</label>
        <select id="editTareaCompletada">
          <option value="false" ${!tarea.completada ? 'selected' : ''}>Pendiente</option>
          <option value="true" ${tarea.completada ? 'selected' : ''}>Completada</option>
        </select>
      </div>
      <div class="form-group">
        <label for="editTareaArchivos"><i class="fas fa-paperclip"></i> Agregar archivos (opcional):</label>
        <input type="file" id="editTareaArchivos" multiple>
        <div id="editTareaArchivosPreview" class="files-preview"></div>
      </div>
      ${tarea.archivos && tarea.archivos.length > 0 ? `
        <div class="form-group">
          <label><i class="fas fa-paperclip"></i> Archivos existentes:</label>
          <div class="archivos-existente">
            ${tarea.archivos.map((archivo, index) => `
              <div class="archivo-item">
                <a href="${archivo.url}" target="_blank" download="${archivo.nombre}">
                  ${obtenerIconoPorExtension(archivo.nombre)}
                  ${archivo.nombre} (${formatearTamaño(archivo.tamaño)})
                </a>
                <i class="fas fa-times remove-file" onclick="eliminarArchivoExistente('tarea', ${tarea.id}, ${index})"></i>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      <button onclick="actualizarTarea(${id})"><i class="fas fa-save"></i> Actualizar Tarea</button>
    </div>
  `;

  // Configurar el listener para nuevos archivos
  document.getElementById('editTareaArchivos').addEventListener('change', (e) => {
    manejarSeleccionArchivos(e, 'editTarea');
  });

  modal.style.display = 'block';
}

function editarCapsula(id) {
  const capsula = capsulas.find(c => c.id === id);
  if (!capsula) return;

  modalContent.innerHTML = `
        <h3><i class="fas fa-edit"></i> Editar Cápsula</h3>
        <div class="form-container">
            <input type="text" id="editCapsulaTitulo" value="${capsula.titulo}" placeholder="Título de la cápsula" required>
            <div class="form-row">
                <label for="editCapsulaTipo"><i class="fas fa-tag"></i> Tipo:</label>
                <select id="editCapsulaTipo">
                    <option value="video" ${capsula.tipo === 'video' ? 'selected' : ''}>Video</option>
                    <option value="articulo" ${capsula.tipo === 'articulo' ? 'selected' : ''}>Artículo</option>
                    <option value="presentacion" ${capsula.tipo === 'presentacion' ? 'selected' : ''}>Presentación</option>
                </select>
            </div>
            <div id="editCapsulaUrlContainer">
                <label for="editCapsulaUrl"><i class="fas fa-link"></i> URL del recurso:</label>
                <input type="url" id="editCapsulaUrl" value="${capsula.url}" required>
            </div>
            <textarea id="editCapsulaDescripcion" placeholder="Descripción y notas">${capsula.descripcion || ''}</textarea>
            <div class="form-row">
                <label for="editCapsulaDuracion"><i class="far fa-clock"></i> Duración (minutos):</label>
                <input type="number" id="editCapsulaDuracion" min="1" value="${capsula.duracion || 10}">
            </div>
            <button onclick="actualizarCapsula(${id})"><i class="fas fa-save"></i> Actualizar Cápsula</button>
        </div>
    `;

  document.getElementById('editCapsulaTipo').addEventListener('change', () => {
    const tipo = document.getElementById('editCapsulaTipo').value;
    const urlContainer = document.getElementById('editCapsulaUrlContainer');

    if (tipo === 'video') {
      urlContainer.innerHTML = `
                <label for="editCapsulaUrl"><i class="fas fa-video"></i> URL del video:</label>
                <input type="url" id="editCapsulaUrl" value="${capsula.url}" required>
            `;
    } else if (tipo === 'articulo') {
      urlContainer.innerHTML = `
                <label for="editCapsulaUrl"><i class="fas fa-newspaper"></i> URL del artículo:</label>
                <input type="url" id="editCapsulaUrl" value="${capsula.url}" required>
            `;
    } else if (tipo === 'presentacion') {
      urlContainer.innerHTML = `
                <label for="editCapsulaUrl"><i class="fas fa-file-powerpoint"></i> URL de la presentación:</label>
                <input type="url" id="editCapsulaUrl" value="${capsula.url}" required>
            `;
    }
  });

  modal.style.display = 'block';
}

function cerrarModal() {
  modal.style.display = 'none';
}

function formatearTamaño(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function previsualizarMarkdown(texto) {
  return texto
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/^# (.*$)/gm, '<h4>$1</h4>')
    .replace(/\n/g, '<br>');
}

function actualizarFormularioCapsula() {
  const tipo = document.getElementById('capsulaTipo').value;
  const urlContainer = document.getElementById('capsulaUrlContainer');

  if (tipo === 'video') {
    urlContainer.innerHTML = `
            <label for="capsulaUrl"><i class="fas fa-video"></i> URL del video:</label>
            <input type="url" id="capsulaUrl" placeholder="https://youtube.com/ejemplo" required>
        `;
  } else if (tipo === 'articulo') {
    urlContainer.innerHTML = `
            <label for="capsulaUrl"><i class="fas fa-newspaper"></i> URL del artículo:</label>
            <input type="url" id="capsulaUrl" placeholder="https://medium.com/ejemplo" required>
        `;
  } else if (tipo === 'presentacion') {
    urlContainer.innerHTML = `
            <label for="capsulaUrl"><i class="fas fa-file-powerpoint"></i> URL de la presentación:</label>
            <input type="url" id="capsulaUrl" placeholder="https://slideshare.com/ejemplo" required>
        `;
  }
}

window.iniciarSesion = iniciarSesion;
window.registrarUsuario = registrarUsuario;

// Si necesitas que otras funciones estén disponibles globalmente para onclick
window.entrarCurso = entrarCurso;
window.editarCurso = editarCurso;
window.eliminarCurso = eliminarCurso;
window.editarGuia = editarGuia;
window.eliminarGuia = eliminarGuia;
window.editarTarea = editarTarea;
window.eliminarTarea = eliminarTarea;
window.toggleCompletada = toggleCompletada;
window.editarCapsula = editarCapsula;
window.eliminarCapsula = eliminarCapsula;
window.actualizarCurso = actualizarCurso;
window.actualizarGuia = actualizarGuia;
window.actualizarTarea = actualizarTarea;
window.actualizarCapsula = actualizarCapsula;
window.verificarPermisosEdicion = verificarPermisosEdicion;
window.puedeCrearContenido = puedeCrearContenido;
window.eliminarEnlaceTemporal = eliminarEnlaceTemporal;

// Hacer funciones disponibles globalmente para eventos HTML
window.mostrarModalAuth = mostrarModalAuth;
window.iniciarSesion = iniciarSesion;
window.registrarUsuario = registrarUsuario;
window.mostrarSeccion = mostrarSeccion;
window.mostrarSeccionCurso = mostrarSeccionCurso;
// Hacer funciones disponibles globalmente
window.editarObjetivos = editarObjetivos;
window.editarRequisitos = editarRequisitos;
window.guardarObjetivos = guardarObjetivos;
window.guardarRequisitos = guardarRequisitos;
window.cancelarEdicion = cancelarEdicion;

// Función para actualizar rol de usuario (llamada desde el HTML)
window.actualizarRolUsuario = async function () {
  const email = document.getElementById('admin-user-email').value.trim();
  const role = document.getElementById('admin-user-role').value;

  if (!email) {
    alert('Por favor ingrese un email válido');
    return;
  }

  try {
    // 1. Buscar el usuario por email
    const { data: user, error: userError } = await supabase
      .from('profiles') // Asegúrate de que esta tabla existe
      .select('id')
      .eq('email', email)
      .single();

    if (userError || !user) {
      throw new Error('Usuario no encontrado');
    }

    // 2. Actualizar el rol en tu tabla de roles
    const { error } = await supabase
      .from('user_roles')
      .upsert(
        { user_id: user.id, role: role },
        { onConflict: 'user_id' }
      );

    if (error) throw error;

    alert(`Rol actualizado correctamente a ${role}`);
    document.getElementById('admin-user-email').value = '';
  } catch (error) {
    console.error('Error al actualizar rol:', error);
    alert('Error: ' + error.message);
  }
};

async function verificarPermisosEdicion(entidad, id) {
  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');

  // Los administradores pueden editar todo
  if (userRole === ROLES.ADMIN) return true;

  try {
    // Obtener el creador del recurso
    const { data, error } = await supabase
      .from(entidad)
      .select('user_id')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) return false;

    // Verificar si el usuario es el creador y tiene rol de profesor o admin
    return data.user_id === userId && (userRole === ROLES.TEACHER || userRole === ROLES.ADMIN);
  } catch (error) {
    console.error('Error al verificar permisos:', error);
    return false;
  }
}

// Verifica si el usuario puede crear contenido
function puedeCrearContenido() {
  const userRole = localStorage.getItem('userRole');
  return userRole === ROLES.TEACHER || userRole === ROLES.ADMIN;
}

function obtenerEnlacesEditados(prefijoId) {
  const enlaces = [];
  const enlacesElements = document.querySelectorAll(`#${prefijoId}EnlacesPreview .enlace-preview`);

  enlacesElements.forEach(enlaceElement => {
    const url = enlaceElement.querySelector('a').getAttribute('href');
    const texto = enlaceElement.querySelector('a').textContent;
    enlaces.push({ url, texto });
  });

  return enlaces;
}

function obtenerIconoPorExtension(url) {
  // Extraer la extensión del archivo
  const extension = url.split('.').pop().toLowerCase();

  // Mapeo de extensiones a iconos de Font Awesome
  const iconos = {
    pdf: 'file-pdf',
    doc: 'file-word',
    docx: 'file-word',
    xls: 'file-excel',
    xlsx: 'file-excel',
    ppt: 'file-powerpoint',
    pptx: 'file-powerpoint',
    jpg: 'file-image',
    jpeg: 'file-image',
    png: 'file-image',
    gif: 'file-image',
    mp4: 'file-video',
    mov: 'file-video',
    avi: 'file-video',
    mp3: 'file-audio',
    wav: 'file-audio',
    zip: 'file-archive',
    rar: 'file-archive',
    txt: 'file-alt',
    csv: 'file-csv',
    html: 'file-code',
    js: 'file-code',
    json: 'file-code',
    py: 'file-code',
    ipynb: 'file-code'
  };

  // Si la extensión está en nuestro mapeo, devolver el icono correspondiente
  if (iconos[extension]) {
    return `<i class="fas fa-${iconos[extension]} file-icon"></i>`;
  }

  // Si no, devolver un icono genérico
  return `<i class="fas fa-file file-icon"></i>`;
}

function formatearFechaLocal(isoString) {
  if (!isoString) return 'Sin fecha';

  const fecha = new Date(isoString);

  return fecha.toLocaleString('es-CL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Santiago'
  }).replace(',', '');
}

document.addEventListener('DOMContentLoaded', async () => {
  // Inicializar autenticación primero
  await initAuth();

  // Configurar listeners solo si los elementos existen
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', mostrarModalAuth);
  }

  // Solo inicializar funcionalidad relacionada con cursos si estamos en una página de cursos
  const isCoursePage = document.getElementById('listaCursos') ||
    document.getElementById('curso-detalle-section') ||
    document.getElementById('dashboard-section');

  if (isCoursePage) {
    await cargarDatos();

    // Configurar listeners relacionados con cursos
    const agregarCursoBtn = document.getElementById('agregarCurso');
    if (agregarCursoBtn) {
      agregarCursoBtn.addEventListener('click', agregarCurso);
    }

    const volverCursosBtn = document.getElementById('volverCursos');
    if (volverCursosBtn) {
      volverCursosBtn.addEventListener('click', () => mostrarSeccion('cursos'));
    }

    // Navegación dentro del curso
    const btnGuias = document.getElementById('btnGuias');
    const btnTareas = document.getElementById('btnTareas');
    const btnCapsulas = document.getElementById('btnCapsulas');

    if (btnGuias) btnGuias.addEventListener('click', () => mostrarSeccionCurso('guias'));
    if (btnTareas) btnTareas.addEventListener('click', () => mostrarSeccionCurso('tareas'));
    if (btnCapsulas) btnCapsulas.addEventListener('click', () => mostrarSeccionCurso('capsulas'));

    // CRUD Guías
    const agregarGuiaBtn = document.getElementById('agregarGuia');
    if (agregarGuiaBtn) {
      agregarGuiaBtn.addEventListener('click', agregarGuia);
    }

    // CRUD Tareas
    const agregarTareaBtn = document.getElementById('agregarTarea');
    if (agregarTareaBtn) {
      agregarTareaBtn.addEventListener('click', agregarTarea);
    }

    // CRUD Cápsulas
    const agregarCapsulaBtn = document.getElementById('agregarCapsula');
    if (agregarCapsulaBtn) {
      agregarCapsulaBtn.addEventListener('click', agregarCapsula);
    }

    const capsulaTipoSelect = document.getElementById('capsulaTipo');
    if (capsulaTipoSelect) {
      capsulaTipoSelect.addEventListener('change', actualizarFormularioCapsula);
    }

    // Configurar listeners para los botones de edición
    const btnEditarObjetivos = document.getElementById('btnEditarObjetivos');
    const btnEditarRequisitos = document.getElementById('btnEditarRequisitos');

    if (btnEditarObjetivos) {
      btnEditarObjetivos.addEventListener('click', editarObjetivos);
    }

    if (btnEditarRequisitos) {
      btnEditarRequisitos.addEventListener('click', editarRequisitos);
    }
  }

  // Listeners del modal
  const closeModal = document.querySelector('.close');
  if (closeModal) {
    closeModal.addEventListener('click', cerrarModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  // Mostrar sección inicial
  const seccionInicial = window.location.hash ? window.location.hash.substring(1) : 'cursos';
  mostrarSeccion(seccionInicial);
});

async function renderizarCalendario() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  // Obtener todas las tareas
  const { data: tareas, error } = await supabase
    .from('tareas')
    .select('*');

  if (error) {
    console.error('Error al cargar tareas:', error);
    return;
  }

  // Formatear eventos para FullCalendar
  const eventos = tareas.map(tarea => ({
    title: tarea.titulo,
    start: tarea.fecha_limite,
    end: tarea.fecha_limite,
    allDay: false,
    backgroundColor: tarea.completada ? '#2ecc71' : '#e74c3c',
    borderColor: tarea.completada ? '#27ae60' : '#c0392b',
    extendedProps: {
      descripcion: tarea.descripcion,
      curso_id: tarea.curso_id
    }
  }));

  // Inicializar calendario
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: eventos,
    eventClick: function (info) {
      mostrarDetalleTarea(info.event);
    }
  });

  calendar.render();
}

function mostrarDetalleTarea(evento) {
  modalContent.innerHTML = `
    <div class="evento-detalle">
      <h3>${evento.title}</h3>
      <p><strong>Fecha límite:</strong> ${formatearFechaLocal(evento.start)}</p>
      <p><strong>Estado:</strong> ${evento.backgroundColor === '#2ecc71' ? 'Completada' : 'Pendiente'}</p>
      <p><strong>Descripción:</strong> ${evento.extendedProps.descripcion}</p>
      <button onclick="mostrarSeccion('cursos'); entrarCurso(${evento.extendedProps.curso_id}); cerrarModal();">
        Ir al curso
      </button>
    </div>
  `;
  modal.style.display = 'block';
}

async function renderizarVideochat() {
  const listaReuniones = document.getElementById('lista-reuniones');
  if (!listaReuniones) return;

  try {
    // 1. Obtener reuniones
    const { data: reuniones, error: reunionesError } = await supabase
      .from('reuniones')
      .select('*')
      .order('fecha_hora', { ascending: true });

    if (reunionesError) throw reunionesError;

    // 2. Obtener información de usuarios (creadores)
    const userIds = reuniones.map(r => r.user_id).filter(Boolean);
    const { data: usuarios, error: usuariosError } = await supabase
      .from('user_roles')
      .select('user_id, nombre, email')
      .in('user_id', [...new Set(userIds)]); // Elimina duplicados

    if (usuariosError) throw usuariosError;

    // Crear mapa de usuarios para fácil acceso
    const usuariosMap = usuarios.reduce((map, user) => {
      map[user.user_id] = user;
      return map;
    }, {});

    listaReuniones.innerHTML = '';

    if (reuniones.length === 0) {
      listaReuniones.innerHTML = '<p class="no-items">No hay reuniones programadas</p>';
      return;
    }

    // 3. Renderizar reuniones con información de creadores
    reuniones.forEach(reunion => {
      const creador = usuariosMap[reunion.user_id] || { nombre: 'Desconocido', email: 'desconocido@email.com' };
      const fechaHora = new Date(reunion.fecha_hora);
      const fechaStr = fechaHora.toLocaleDateString('es-CL');
      const horaStr = fechaHora.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
      
      const reunionElement = document.createElement('div');
      reunionElement.className = 'reunion-item';
      
      reunionElement.innerHTML = `
        <div class="reunion-header">
          <h4>${reunion.titulo}</h4>
          <span class="badge ${reunion.estado}">${reunion.estado}</span>
        </div>
        <div class="reunion-body">
          <p><i class="far fa-calendar"></i> ${fechaStr} a las ${horaStr}</p>
          ${reunion.descripcion ? `<p>${reunion.descripcion}</p>` : ''}
          <p><i class="fas fa-user"></i> Creada por: ${creador.nombre || creador.email}</p>
          <div class="reunion-actions">
            <button class="btn-unirse" onclick="unirseReunion('${reunion.id}')">
              <i class="fas fa-video"></i> Unirse
            </button>
            ${puedeAdministrarReuniones(reunion.user_id) ? `
              <button class="btn-eliminar" onclick="eliminarReunion('${reunion.id}')">
                <i class="fas fa-trash"></i> Eliminar
              </button>
            ` : ''}
          </div>
        </div>
      `;
      listaReuniones.appendChild(reunionElement);
    });

  } catch (error) {
    console.error('Error al cargar reuniones:', error);
    listaReuniones.innerHTML = '<p class="no-items">Error al cargar reuniones</p>';
  }
}

function unirseReunion(reunionId) {
  // Implementación para unirse a la reunión (usando Jitsi, Zoom, etc.)
  modalContent.innerHTML = `
    <div class="videochat-container">
      <h3>Uniéndose a la reunión</h3>
      <div id="videochat-frame"></div>
      <button onclick="cerrarModal()" class="btn-salir">
        <i class="fas fa-sign-out-alt"></i> Salir
      </button>
    </div>
  `;

  // Ejemplo con Jitsi Meet
  const domain = 'meet.jit.si';
  const options = {
    roomName: `IAÑuble-Reunion-${reunionId}`,
    width: '100%',
    height: 500,
    parentNode: document.querySelector('#videochat-frame')
  };

  const api = new JitsiMeetExternalAPI(domain, options);
  modal.style.display = 'block';
}

function puedeAdministrarReuniones(creadorId) {
  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
  
  // Admins pueden administrar todas las reuniones
  if (userRole === ROLES.ADMIN) return true;
  
  // Profesores pueden administrar sus propias reuniones
  return (userRole === ROLES.TEACHER || userRole === ROLES.ADMIN) && 
         creadorId === userId;
}

async function renderizarCalificaciones() {
  const tablaCalificaciones = document.getElementById('tabla-calificaciones');
  const cursoSelect = document.getElementById('curso-select-grades');

  if (!tablaCalificaciones || !cursoSelect) return;

  // Cargar cursos disponibles
  const { data: cursos, error: cursosError } = await supabase
    .from('cursos')
    .select('id, nombre');

  if (cursosError) {
    console.error('Error al cargar cursos:', cursosError);
    return;
  }

  // Llenar selector de cursos
  cursoSelect.innerHTML = '<option value="">Seleccionar curso</option>';
  cursos.forEach(curso => {
    cursoSelect.innerHTML += `<option value="${curso.id}">${curso.nombre}</option>`;
  });

  // Manejar cambio de curso
  cursoSelect.addEventListener('change', async (e) => {
    const cursoId = e.target.value;
    if (!cursoId) return;

    try {
      // Obtener calificaciones para el curso seleccionado
      const { data: calificaciones, error: calificacionesError } = await supabase
        .from('calificaciones')
        .select('*')
        .eq('curso_id', cursoId);

      if (calificacionesError) throw calificacionesError;

      // Obtener información de estudiantes
      const { data: estudiantes, error: estudiantesError } = await supabase
        .from('user_roles')
        .select('user_id, nombre, email');

      if (estudiantesError) throw estudiantesError;

      // Obtener información de tareas
      const { data: tareas, error: tareasError } = await supabase
        .from('tareas')
        .select('id, titulo, puntos')
        .eq('curso_id', cursoId);

      if (tareasError) throw tareasError;

      // Combinar los datos manualmente
      const calificacionesCompletas = calificaciones.map(calificacion => {
        const estudiante = estudiantes.find(e => e.user_id === calificacion.estudiante_id);
        const tarea = tareas.find(t => t.id === calificacion.tarea_id);
        
        return {
          ...calificacion,
          estudiante: estudiante || { nombre: 'Desconocido', email: 'desconocido@email.com' },
          tarea: tarea || { titulo: 'Tarea eliminada', puntos: 0 }
        };
      });

      // Renderizar tabla de calificaciones
      renderizarTablaCalificaciones(calificacionesCompletas);

    } catch (error) {
      console.error('Error al cargar calificaciones:', error);
      tablaCalificaciones.innerHTML = '<p class="no-items">Error al cargar calificaciones</p>';
    }
  });
}

function renderizarTablaCalificaciones(calificaciones) {
  const tablaCalificaciones = document.getElementById('tabla-calificaciones');
  if (!tablaCalificaciones) return;

  if (!calificaciones || calificaciones.length === 0) {
    tablaCalificaciones.innerHTML = '<p class="no-items">No hay calificaciones registradas para este curso</p>';
    return;
  }

  // Crear tabla HTML
  let html = `
    <table class="grades-table">
      <thead>
        <tr>
          <th>Estudiante</th>
          <th>Tarea</th>
          <th>Calificación</th>
          <th>Comentarios</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
  `;

  calificaciones.forEach(calificacion => {
    const estudianteNombre = calificacion.estudiante?.nombre || calificacion.estudiante?.email || 'Desconocido';
    const tareaTitulo = calificacion.tarea?.titulo || 'Tarea eliminada';
    const puntosTarea = calificacion.tarea?.puntos || 0;
    
    html += `
      <tr>
        <td>${estudianteNombre}</td>
        <td>${tareaTitulo}</td>
        <td>${calificacion.puntaje || 0}/${puntosTarea}</td>
        <td>${calificacion.comentarios || '-'}</td>
        <td>${calificacion.fecha ? formatearFechaLocal(calificacion.fecha) : '-'}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  tablaCalificaciones.innerHTML = html;
}

function puedeAdministrarParticipantes() {
  const userRole = localStorage.getItem('userRole');
  return userRole === ROLES.ADMIN || userRole === ROLES.TEACHER;
}

async function renderizarParticipantes() {
  const listaParticipantes = document.getElementById('lista-participantes');
  if (!listaParticipantes) return;

  try {
    // Obtener todos los usuarios con sus roles (ahora con email directo)
    const { data: participantes, error } = await supabase
      .from('user_roles')
      .select('*')
      .order('nombre', { ascending: true });

    if (error) throw error;

    if (!participantes || participantes.length === 0) {
      listaParticipantes.innerHTML = '<p class="no-items">No hay participantes registrados</p>';
      return;
    }

    listaParticipantes.innerHTML = '';

    participantes.forEach(participante => {
      const participanteElement = document.createElement('div');
      participanteElement.className = 'participant-card';

      // Determinar el color del badge según el rol
      let badgeClass = '';
      if (participante.role === ROLES.ADMIN) {
        badgeClass = 'role-admin';
      } else if (participante.role === ROLES.TEACHER) {
        badgeClass = 'role-teacher';
      } else {
        badgeClass = 'role-student';
      }

      participanteElement.innerHTML = `
        <div class="participant-header">
          <div class="participant-avatar">
            <i class="fas fa-user-circle"></i>
          </div>
          <h4>${participante.nombre || participante.email}</h4>
        </div>
        <div class="participant-info">
          <p><i class="fas fa-envelope"></i> ${participante.email}</p>
          <span class="role-badge ${badgeClass}">${participante.role}</span>
        </div>
        <div class="participant-actions">
          ${puedeAdministrarParticipantes() ? `
            <button onclick="editarParticipante('${participante.user_id}')">
              <i class="fas fa-edit"></i> Editar
            </button>
          ` : ''}
        </div>
      `;
      listaParticipantes.appendChild(participanteElement);
    });

  } catch (error) {
    console.error('Error al cargar participantes:', error);
    listaParticipantes.innerHTML = '<p class="no-items">Error al cargar participantes</p>';
  }
}

// Función para manejar la selección de archivos
function manejarSeleccionArchivos(event, tipo) {
  const files = Array.from(event.target.files);
  
  files.forEach(file => {
    archivosTemporales[tipo].push(file);
    actualizarPreviaArchivos(tipo);
  });
  
  // Limpiar el input para permitir seleccionar el mismo archivo otra vez
  event.target.value = '';
}

// Función para actualizar la vista previa de archivos
function actualizarPreviaArchivos(tipo) {
  const previewContainer = document.getElementById(`${tipo}ArchivosPreview`);
  previewContainer.innerHTML = '';

  archivosTemporales[tipo].forEach((file, index) => {
    const fileElement = document.createElement('div');
    fileElement.className = 'file-preview';
    fileElement.innerHTML = `
      <i class="fas fa-file"></i>
      <span class="archivo-nombre">${file.name}</span>
      <span class="archivo-tamaño">(${formatearTamaño(file.size)})</span>
      <i class="fas fa-times remove-file" onclick="eliminarArchivoTemporal('${tipo}', ${index})"></i>
    `;
    previewContainer.appendChild(fileElement);
  });
}

// Función para eliminar archivos temporales
window.eliminarArchivoTemporal = function(tipo, index) {
  archivosTemporales[tipo].splice(index, 1);
  actualizarPreviaArchivos(tipo);
};

async function subirArchivos(archivos, tipo, idContenido) {
  if (!archivos || archivos.length === 0) return [];

  const uploadedFiles = [];
  const user = await getCurrentUser();
  
  for (const file of archivos) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${tipo}/${idContenido}/${fileName}`;
    
    try {
      // 1. Subir el archivo al storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('archivos')
        .upload(filePath, file);
      
      if (uploadError) throw uploadError;
      
      // 2. Obtener URL pública del archivo
      const { data: { publicUrl } } = supabase.storage
        .from('archivos')
        .getPublicUrl(uploadData.path);
      
      uploadedFiles.push({
        nombre: file.name,
        tipo: file.type,
        tamaño: file.size,
        url: publicUrl,
        path: uploadData.path
      });
    } catch (error) {
      console.error(`Error al subir archivo ${file.name}:`, error);
      // Continuar con el siguiente archivo si hay error
      continue;
    }
  }
  
  return uploadedFiles;
}

// Función para eliminar archivos existentes
window.eliminarArchivoExistente = async function(tipo, idContenido, indexArchivo) {
  if (!confirm('¿Estás seguro de que quieres eliminar este archivo?')) return;

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para realizar esta acción');
      return;
    }

    // Obtener el contenido (guía o tarea)
    const { data: contenido, error: fetchError } = await supabase
      .from(tipo === 'guia' ? 'guias' : 'tareas')
      .select('archivos')
      .eq('id', idContenido)
      .single();

    if (fetchError || !contenido) throw fetchError || new Error('Contenido no encontrado');

    // Eliminar el archivo del array
    const archivoAEliminar = contenido.archivos[indexArchivo];
    const nuevosArchivos = contenido.archivos.filter((_, i) => i !== indexArchivo);

    // 1. Eliminar el archivo del storage
    if (archivoAEliminar.path) {
      const { error: deleteError } = await supabase.storage
        .from('archivos')
        .remove([archivoAEliminar.path]);
      
      if (deleteError) throw deleteError;
    }

    // 2. Actualizar en la base de datos
    const { error: updateError } = await supabase
      .from(tipo === 'guia' ? 'guias' : 'tareas')
      .update({ archivos: nuevosArchivos })
      .eq('id', idContenido);

    if (updateError) throw updateError;

    // Actualizar localmente
    const contenidoIndex = tipo === 'guia' ? 
      guias.findIndex(g => g.id === idContenido) : 
      tareas.findIndex(t => t.id === idContenido);

    if (contenidoIndex !== -1) {
      if (tipo === 'guia') {
        guias[contenidoIndex].archivos = nuevosArchivos;
        renderizarGuias();
      } else {
        tareas[contenidoIndex].archivos = nuevosArchivos;
        renderizarTareas();
      }
    }

    // Recargar el modal si está abierto
    if (modal.style.display === 'block') {
      if (tipo === 'guia') {
        editarGuia(idContenido);
      } else {
        editarTarea(idContenido);
      }
    }

  } catch (error) {
    console.error('Error al eliminar archivo:', error);
    alert('Error al eliminar el archivo: ' + error.message);
  }
};  

// Agregar listeners para los inputs de archivos en el DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Configurar listeners para archivos en formularios de creación
  const guiaArchivosInput = document.getElementById('guiaArchivos');
  if (guiaArchivosInput) {
    guiaArchivosInput.addEventListener('change', (e) => {
      manejarSeleccionArchivos(e, 'guia');
    });
  }

  const tareaArchivosInput = document.getElementById('tareaArchivos');
  if (tareaArchivosInput) {
    tareaArchivosInput.addEventListener('change', (e) => {
      manejarSeleccionArchivos(e, 'tarea');
    });
  }
});

// Agregar esta función para oscurecer colores
function oscurecerColor(hex, cantidad) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `#${Math.max(0, r - cantidad).toString(16).padStart(2, '0')}${Math.max(0, g - cantidad).toString(16).padStart(2, '0')}${Math.max(0, b - cantidad).toString(16).padStart(2, '0')}`;
}

// Agregar el listener para la nueva pestaña
document.addEventListener('DOMContentLoaded', () => {
  const btnPresentacion = document.getElementById('btnPresentacion');
  if (btnPresentacion) {
    btnPresentacion.addEventListener('click', () => mostrarSeccionCurso('presentacion'));
  }
});

// Agrega esto cerca de las otras constantes
const crearReunionBtn = document.getElementById('crearReunionBtn');

// Agrega esta función para manejar la creación de reuniones
async function crearReunion() {
  modalContent.innerHTML = `
    <div class="auth-modal">
      <h3><i class="fas fa-video"></i> Crear Nueva Reunión</h3>
      <div class="form-container">
        <div class="form-group">
          <label for="reunionTitulo">Título de la reunión</label>
          <input type="text" id="reunionTitulo" placeholder="Ej: Clase de Introducción a IA" required>
        </div>
        <div class="form-group">
          <label for="reunionDescripcion">Descripción (opcional)</label>
          <textarea id="reunionDescripcion" placeholder="Agrega detalles sobre la reunión"></textarea>
        </div>
        <div class="form-group">
          <label for="reunionFecha"><i class="far fa-calendar-alt"></i> Fecha y hora</label>
          <input type="datetime-local" id="reunionFecha" required>
        </div>
        <button onclick="guardarReunion()" class="auth-submit">
          <i class="fas fa-calendar-plus"></i> Programar Reunión
        </button>
      </div>
    </div>
  `;
  
  // Configurar la fecha mínima como la fecha actual
  const now = new Date();
  const localDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  document.getElementById('reunionFecha').min = localDateTime;
  
  modal.style.display = 'block';
}

// Función para guardar la reunión en Supabase
async function guardarReunion() {
  const titulo = document.getElementById('reunionTitulo').value.trim();
  const descripcion = document.getElementById('reunionDescripcion').value.trim();
  const fechaInput = document.getElementById('reunionFecha').value;

  if (!titulo || !fechaInput) {
    alert('El título y la fecha son obligatorios');
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para crear una reunión');
      return;
    }

    // Convertir fecha local a UTC
    const fechaLocal = new Date(fechaInput);
    const fechaUTC = new Date(
      Date.UTC(
        fechaLocal.getFullYear(),
        fechaLocal.getMonth(),
        fechaLocal.getDate(),
        fechaLocal.getHours(),
        fechaLocal.getMinutes()
      )
    );

    const { data, error } = await supabase
      .from('reuniones')
      .insert([{
        titulo,
        descripcion,
        fecha_hora: fechaUTC.toISOString(),
        user_id: user.id,  // Cambiado de creador_id a user_id
        estado: 'programada',
        curso_id: cursoActual?.id  // Agregar curso_id si hay un curso seleccionado
      }])
      .select();

    if (error) throw error;

    if (data && data.length > 0) {
      alert('Reunión creada exitosamente');
      cerrarModal();
      renderizarVideochat(); // Actualizar la lista de reuniones
    }
  } catch (error) {
    console.error('Error al crear reunión:', error);
    alert('Error al crear la reunión: ' + error.message);
  }
}

// Función para eliminar reunión
async function eliminarReunion(id) {
  if (!confirm('¿Estás seguro de que quieres eliminar esta reunión?')) {
    return;
  }

  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para eliminar una reunión');
      return;
    }

    // Primero verificar si el usuario puede eliminar esta reunión
    const { data: reunion, error: fetchError } = await supabase
      .from('reuniones')
      .select('user_id')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;
    
    if (!puedeAdministrarReuniones(reunion.user_id)) {
      alert('No tienes permisos para eliminar esta reunión');
      return;
    }

    const { error } = await supabase
      .from('reuniones')
      .delete()
      .eq('id', id);

    if (error) throw error;

    alert('Reunión eliminada exitosamente');
    renderizarVideochat(); // Actualizar la lista de reuniones
  } catch (error) {
    console.error('Error al eliminar reunión:', error);
    alert('Error al eliminar la reunión: ' + error.message);
  }
}

// Agrega esto al final de tu archivo script.js, dentro del DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // ... otro código existente ...

  // Configurar el listener para el botón de crear reunión
  if (crearReunionBtn) {
    crearReunionBtn.addEventListener('click', crearReunion);
  }

  // Hacer las funciones disponibles globalmente
  window.crearReunion = crearReunion;
  window.guardarReunion = guardarReunion;
  window.eliminarReunion = eliminarReunion;
  window.unirseReunion = unirseReunion;
});

// Al inicio de tu script.js
window.cerrarModal = function() {
  modal.style.display = 'none';
};

// Función para editar objetivos
async function editarObjetivos() {
  if (!cursoActual) return;
  
  const tienePermiso = await verificarPermisosEdicion('cursos', cursoActual.id);
  if (!tienePermiso) {
    alert('No tienes permisos para editar este curso');
    return;
  }

  const objetivosContent = document.getElementById('curso-objetivos-content');
  objetivosContent.innerHTML = `
    <div class="edit-form-container">
      <textarea id="editObjetivosText" class="edit-textarea">${cursoActual.objetivos || ''}</textarea>
      <div class="edit-form-actions">
        <button onclick="guardarObjetivos()" class="btn-primary">
          <i class="fas fa-save"></i> Guardar
        </button>
        <button onclick="cancelarEdicion('objetivos')" class="btn-secondary">
          <i class="fas fa-times"></i> Cancelar
        </button>
      </div>
    </div>
  `;
}

// Función para guardar objetivos en Supabase
async function guardarObjetivos() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para editar el curso');
      return;
    }

    const nuevosObjetivos = document.getElementById('editObjetivosText').value.trim();

    // Actualizar en Supabase
    const { data, error } = await supabase
      .from('cursos')
      .update({ 
        objetivos: nuevosObjetivos,
      })
      .eq('id', cursoActual.id)
      .select();

    if (error) throw error;

    if (data && data.length > 0) {
      // Actualizar el curso actual con los nuevos datos
      cursoActual = data[0];
      renderizarPresentacionCurso();
    }
  } catch (error) {
    console.error('Error al guardar objetivos:', error);
  }
}

// Función para editar requisitos
async function editarRequisitos() {
  if (!cursoActual) return;
  
  const tienePermiso = await verificarPermisosEdicion('cursos', cursoActual.id);
  if (!tienePermiso) {
    alert('No tienes permisos para editar este curso');
    return;
  }

  const requisitosContent = document.getElementById('curso-requisitos-content');
  requisitosContent.innerHTML = `
    <div class="edit-form-container">
      <textarea id="editRequisitosText" class="edit-textarea">${cursoActual.requisitos || ''}</textarea>
      <div class="edit-form-actions">
        <button onclick="guardarRequisitos()" class="btn-primary">
          <i class="fas fa-save"></i> Guardar
        </button>
        <button onclick="cancelarEdicion('requisitos')" class="btn-secondary">
          <i class="fas fa-times"></i> Cancelar
        </button>
      </div>
    </div>
  `;
}

// Función para guardar requisitos en Supabase
async function guardarRequisitos() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      alert('Debes iniciar sesión para editar el curso');
      return;
    }

    const nuevosRequisitos = document.getElementById('editRequisitosText').value.trim();

    // Actualizar en Supabase
    const { data, error } = await supabase
      .from('cursos')
      .update({ 
        requisitos: nuevosRequisitos,
      })
      .eq('id', cursoActual.id)
      .select();

    if (error) throw error;

    if (data && data.length > 0) {
      // Actualizar el curso actual con los nuevos datos
      cursoActual = data[0];
      renderizarPresentacionCurso();
    }
  } catch (error) {
    console.error('Error al guardar requisitos:', error);
  }
}

/* Función auxiliar para mostrar notificaciones
function mostrarToast(mensaje, tipo = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.textContent = mensaje;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
} */

// Función para cancelar la edición
function cancelarEdicion(tipo) {
  renderizarPresentacionCurso();
}

// Función para renderizar la presentación del curso
function renderizarPresentacionCurso() {
  if (!cursoActual) return;

  document.getElementById('curso-objetivos-content').innerHTML = cursoActual.objetivos 
    ? previsualizarMarkdown(cursoActual.objetivos)
    : '<p>No se han definido objetivos para este curso.</p>';
    
  document.getElementById('curso-requisitos-content').innerHTML = cursoActual.requisitos 
    ? previsualizarMarkdown(cursoActual.requisitos)
    : '<p>No hay requisitos previos para este curso.</p>';
}