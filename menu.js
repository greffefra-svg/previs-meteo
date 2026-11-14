document.getElementById("menu-principal").innerHTML = `
    <nav>
        <a class="element-navigation" href="index.html">Accueil</a>
       
	   <a class="element-navigation" href="situation-generale.html">Vision globale</a>

        <div class="menu-deroulant">
            <a class="element-navigation" href="#">Vision locale▾</a>
            <div class="sous-menu">
                <a class="element-navigation" href="roynac.html">Roynac</a>
				<a class="element-navigation" href="limouches.html">Les Limouches</a>
				<a class="element-navigation" href="leoncel.html">Léoncel</a>
            </div>
        </div>
		
		<div class="menu-deroulant">
            <a class="element-navigation" href="#">En direct▾</a>
            <div class="sous-menu">
                <a class="element-navigation" href="balises.html">Carte des balises</a>
				<a class="element-navigation" href="spotair.html">Spotair/Webcam</a>
				<a class="element-navigation" href="radar de pluie.html">Radars de pluie</a>
            </div>
        </div>
        
    </nav>
`;