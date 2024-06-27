async function permissions(language, permission) {
    switch (language) {
        case 'de':
            return `Sie haben nicht die erforderliche Berechtigung (\`${permission}\`) um diesen Befehl zu verwenden`;
        case 'fr':
            return `Vous n'avez pas la permission requise (\`${permission}\`) pour utiliser cette commande`;
        case 'ptBR':
            return `Você não tem a permissão necessária (\`${permission}\`) para usar esse comando`;
        case 'esES':
            return `No tienes el permiso necesario (\`${permission}\`) para usar este comando`;
        case 'tr':
            return `Bu komutu kullanmak için gerekli izne sahip değilsiniz (\`${permission}\`)`;
        case 'ru':
            return `У вас нет необходимого разрешения (\`${permission}\`) для использования этой команды`;
        default:
            return `You don't have the required permission (\`${permission}\`) to use this command`;
    }
}

module.exports = permissions;