document.getElementById("menu-principal").innerHTML = `
    <nav>
        <a class="element-navigation" href="index.html">Accueil</a>
        <a class="element-navigation" href="situation-generale.html">Situation générale</a>

        <div class="menu-deroulant">
            <a class="element-navigation" href="#">Prévisions par site ▾</a>
            <div class="sous-menu">
                <a class="element-navigation" href="roynac.html">Roynac</a>
				<a class="element-navigation" href="limouches.html">Les Limouches</a>
				<a class="element-navigation" href="leoncel.html">Léoncel</a>
            </div>
        </div>

        <a class="element-navigation" href="balises.html">Carte des balises</a>
    </nav>
`;