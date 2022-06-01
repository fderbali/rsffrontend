<template>
    <div class="container bg-texture">
        
        <div v-if="this.$i18n.locale=='fr'">
            
            <ul>
                <h3 class="pt-1 pb-3">Reseau Savoir Faire - RSF</h3>
                <li>Cette application Web permet de partager du savoir faire entre utilisateurs.</li>
                <li>Chaque utilisateur peut jouer le rôle d’enseignant ou de participan (élève).</li>
                <li>Un utilisateur désirant partager son savoir peut publier une annonce de formation.</li>
                <li>Un autre utilisateur peut alors consulter la description.</li>
            </ul>
            <ul>
                <li>Si la formation l'intéresse il peut initier une demande.</li>
                <li>L'enseignant peut refuser ou accepter cette demande.</li>
                <li>Si la demande est acceptée, l'enseignant envoi un devis au futur participant.</li>
                <li>Le futur paticipant a alors le choix de refuser ou de payer le devis.</li>
                
            </ul>
            <ul>
                <li>Si le devis est accepté, validé et payé,</li>
                <li>l'enseignant peut alors créer une cédule de formation pour ce participant.</li>
                <li>Cette cédule sera accessible aux deux intéressés.</li>
            </ul>
            <ul>
                <li>La communication, entre les deux protagonistes, est assurée par courriel.</li>
                <li>Diverses listes sont aussi disponibles pour le suivi des transactions.</li>
                <li>La géolocalisation est aussi offerte afin de repérer le lieu de la formation.</li>
                <li>Les paiements sécurisés sont effectués via PayPal.</li>
                <li>Un pourcentage de la transaction sera prélevé par RSF,</li>
                <li>pour fin de maintenance de l'application.</li>
            </ul>
        </div>
        <div v-else>
            <ul>
                <h3 class="pt-1 pb-2">Reseau du Savoir Faire</h3>
                <li>This Web application makes it possible to share know-how between users.</li>
                <li>Each user can play the role of teacher or participant (student).</li>
                <li>A user wishing to share his knowledge can publish a training announcement.</li>
                <li>Another user can then view the description.</li>
            </ul>
            <ul>
                <li>If the training interests him, he can initiate a request.</li>
                <li>The teacher can refuse or accept this request.</li>
                <li>If the request is accepted, the teacher sends an estimate to the future participant.</li>
                <li>The future participant then has the choice of refusing or paying the estimate.</li>
            </ul>
            <ul>
                <li>If the estimate is accepted, paid and validated,</li>
                <li>the teacher can then create a training schedule for this participant.</li>
                <li>This schedule will be accessible to both interested parties.</li>
            </ul>
            <ul>
                <li>Communication between the two protagonists is ensured by email.</li>
                <li>Various lists are also available for tracking transactions.</li>
                <li>Geolocation is also offered to locate the location of the training.</li>
                <li>Secure payments are made through PayPal.</li>
                <li>A percentage of the transaction will then be charged by RSF,</li>
                <li>for application maintenance.</li>
            </ul>
        </div>
    </div>
</template>



<script>
export default {
    name: "AboutUs"
}
</script>
