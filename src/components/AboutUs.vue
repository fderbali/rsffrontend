<template>
    <div class="container">
        <h1>{{ $i18n.t('about') }}</h1>
        <h2>{{ $i18n.t('us') }}</h2>

        <div v-if="this.$i18n.locale=='fr'">
            <p>Cette application Web permet de partager du savoir-faire entre utilisateur, peu importe la catégorie!</p>
            <p>Chaque utilisateur peut jouer le rôle d’enseignant ou de participan (élève).</p>
            <p>Un utilisateur désirant partager son savoir peut publier une annonce de formation.</p>
            <p>Un autre utilisateur peut alors consulter la description.</p>
            <p>Si la formation l'intéresse il peut initier une demande.</p>
            <p>L'enseignant peut refuser ou accepter cette demande.</p>
            <p>Si la demande est acceptée, l'enseignant envoi un devis au futur participant.</p>
            <p>Le futur paticipant a alors le choix de refuser ou de payer le devis.</p>

            <ul>Si le devis est accepté, payé et validé,
                <li>l'enseignant peut alors créer une cédule de formation pour ce participant,</li>
                <li>cette cédule sera accessible aux deux intéressés,</li>
                <li>un pourcentage de la transaction sera alors prélevé par RSF pour fin de maintenance de l'application.</li>
            </ul>

            <p>La communication entre les deux protagonistes est assurée par courriel.</p>
            <p>Diverses listes sont aussi disponible pou le suivi des transaction.</p>
            <p>La géolocalisation est aussi offerte afin de repérer le lieu de la formation.</p>
            <p>Les paiements sécurisés sont effectués via PayPal.</p>

            <h3>Technologies utilisées</h3>

            <h4>Serveur : Apache</h4>

            <h4>FramaeWorks : Laravel et Vue js</h4>

            <h4>Base de données : MySql</h4>

            <ul>Langages : 
                <li>Client  -> JavaScript</li>
                <li>Serveur -> PHP</li>
            </ul>

            <ul>Utilitaires :
                <li>Git, Github, GitKraken, Githup Descktop</li>
                <li>Postman</li>
                <li>Laragon</li>
                <li>phpMyAdmin, Workbench</li>
            </ul>

            <h4>Éditeurs : VSCode et ???(Fahmi)</h4>

            <h2>Contact</h2>
            <h3>Courriel : rsfrsf2022@gmail.com</h3>
    </div>
    <div v-else>

            <h1>{{ $i18n.t('about') }}</h1>
            <h2>{{ $i18n.t('us') }}</h2>

            <p>This Web application makes it possible to share know-how between users, regardless of the category!</p>
            <p>Each user of the application can play the role of teacher or participant (student).</p>
            <p>A user wishing to share his knowledge can publish a training announcement.</p>
            <p>Another user can then view the description.</p>
            <p>If the training interests him, he can initiate a request.</p>
            <p>The teacher can refuse or accept this request.</p>
            <p>If the request is accepted, the teacher sends a quote to the future participant.</p>
            <p>The future participant then has the choice of refusing or paying the quote.</p>

            <ul>If the estimate is accepted, paid and validated,
                <li>the teacher can then create a training schedule for this participant,</li>
                <li>this schedule will be accessible to both people,</li>
                <li>a percentage of the transaction is then debited by RSF for maintenance of the application.</li>
            </ul>

            <p>Communication between the two protagonists is ensured by email.</p>
            <p>Various lists are also available for tracking transactions.</p>
            <p>Geolocation is also offered to locate the location of the training.</p>
            <p>Secure payments are made through PayPal.</p>

            <h3>Technologies used</h3>

            <h4>Server : Apache</h4>

            <h4>FrameWorks : Laravel et Vue js</h4>

            <h4>Data Base : MySql</h4>

            <ul>Languages : 
                <li>Client  -> JavaScript</li>
                <li>Server -> PHP</li>
            </ul>

            <ul>Utilities :
                <li>Git, Github, GitKraken, Githup Descktop</li>
                <li>Postman</li>
                <li>Laragon</li>
                <li>phpMyAdmin, Workbench</li>
            </ul>

            <h4>Editors : VSCode et ???(Fahmi)</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUs"
}
</script>
