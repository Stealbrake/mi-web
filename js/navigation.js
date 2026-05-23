const routes = {
    home: "sections/home.html",
    explore: "sections/explore.html",
    eventos: "sections/eventos.html",
    hoteles: "sections/hoteles.html",
    nightlife: "sections/nightlife.html",
    perfil: "sections/perfil.html",
    notifications: "sections/notifications.html"
};

// cargar página dentro del app
async function loadPage(page) {
    const app = document.getElementById("app");

    try {
        const res = await fetch(routes[page]);

        // si la ruta no existe
        if (!res.ok) {
            throw new Error("Página no encontrada");
        }

        const html = await res.text();
        app.innerHTML = html;

    } catch (error) {
        console.error("Error cargando página:", error);
        app.innerHTML = "<h2>Error cargando la página</h2>";
    }
}

// detectar cambios en la URL (#home, #explore, etc)
function router() {
    const page = window.location.hash.replace("#", "");

    loadPage(page || "home");
}

// eventos
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);