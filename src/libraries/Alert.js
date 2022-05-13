import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

export default {
    /**
     * Show fail alert
     *
     * @param    {string}   message   fail message
     *
     */
    fail (message) {
        Swal.fire({
            position:           'top-end',
            icon:               'error',
            title:              'Erreur',
            text:               message,
            showCloseButton:    true,
            allowEscapeKey:     false,
            showConfirmButton:  false,
            confirmButtonColor: '#0c5748',
            toast:              true,
            timer:              6000,
            timerProgressBar:   true
        });
    },

    /**
     * Show success alert
     *
     * @param    {string}   message   success message
     *
     */
    success (message) {
        Swal.fire({
            position:           'top-end',
            icon:               'success',
            title:              'Succès',
            text:               message,
            showCloseButton:    true,
            allowEscapeKey:     false,
            confirmButtonColor: '#0c5748',
            showConfirmButton:  false,
            toast:              true,
            timer:              6000,
            timerProgressBar:   true
        });
    },

    /**
     * Hide All alerts
     */
    close () {
        Swal.close();
    }
};