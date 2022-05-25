<!-- On part avec le user du prof
       - on va chercher le premier training ayant son id (user_id dans la table training)
           - on prend le titre de a session pour la cédule
           - on va cherher les sessions de ce training(id_training dans la table session)
                - pour chaque participant (et on a pas le id participant)
                -   je propose donc qu'on ajoute le id du participant dans la table session
                        on tri la table session par trainig_id, user-id et la date de début date pour cédule prof
                        on tri la table session par user-id, trainig_id  et la date de début pour cédule participant
                        (regarder la possibilité d'ajouter le id du prof dans la table session pour facilité les requêtes) -->

<!-- avec les clés dans la table session 
    on pourrait faire les tri selon le cas (pour prof ou participant)
    tout envoyer dans les cédules pour les users voulus
    sans avoir à accéder la table training etc...
        juste la table users à partir de la table session selon le cas(prof ou participant) -->



<template>

    <div class="container">
        <div class="row">
            <div class="col-md">
                <!-- <img :src="`http://rsfbackend.test/images/${training.thumbnail}`" class="" width="50" height="50" alt="">        -->
                <h5 class="">Titre:{{ training.title }}</h5>
                <h5 class="">Nom:{{ nom participant }}</h5>   
            </div>
            <div class="col" v-for="session, index in sessions" :key="index">
            <!-- ici on doit extraire les parties des dates voulues -->
                <h5 class="">Date:{{ session.start.date}}</h5>
                <h5 class="">Heure début:{{ session.start.hhDebut}}</h5>
                <h5 class="">Heure fin:{{ session.end.hhFin}}</h5>
            </div>
        </div>
    </div>

</template>

<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState('core/demand', [
            'session'
        ]),
    },
    name: "listSessions"
}
</script>