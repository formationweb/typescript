enum TypeNotification {
    Success = 'success',
    Error = 'error',
    Warning = 'warning'
}

type Notif = {
    type: TypeNotification
    message: string
}

type CallbackNotification = (notification: Notif) => void

const maNotification: Notif = {
    type: TypeNotification.Success,
    message: ""
}

const gestionNotification = (notification: Notif) => {
    console.log(`Notification reçue: [${notification.type}] - ${notification.message}`);
};

const verifierNotification = (notification: Notif): never | void  => {
    if (!notification.message) {
        throw new Error('Message manquant')
    }
    console.log('notification valide')
}


const envoyerNotification = (notification: Notif, callback: CallbackNotification) => {
    verifierNotification(notification)
    callback(notification)
} 

envoyerNotification(maNotification, gestionNotification);
//verifierNotification(maNotification)