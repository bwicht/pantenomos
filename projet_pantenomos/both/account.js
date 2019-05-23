//Le fichier both sert au paramétrage de la création du compte coté client et serveur. 

//ligne 3: Change la langue de la modal de connexion
T9n.setLanguage('fr');

//lignes 7-180: Configuration de la création d'un compte utilisateur 
let email = AccountsTemplates.removeField('email');
let password = AccountsTemplates.removeField('password');

AccountsTemplates.addField({
    _id: 'fullname',
    type: 'text',
    placeHolder: 'Ex. Jean Deusspont',
    displayName: "Nom d'utilisateur",
    required: true,
    minLength: 3,
    trim: true,
}),

AccountsTemplates.addField(email);
AccountsTemplates.addField(password);

AccountsTemplates.addField({
    _id: 'age',
    type: 'select',
    displayName: 'Âge (facultatif)',
    placeHolder: 'Âge',
    required: false,
    trim: true,
    select: [
        {
            text:'',
            value:'',
        },
        {
        text: "18-25 ans",
        value: "aa",
      }, {
        text: "26-40 ans",
        value: "bb",
      }, {
        text: " 40-99 ans",
        value: "cc",
      },
    ],
});

AccountsTemplates.addField({
    _id: 'sexe',
    type: 'select',
    displayName: 'Sexe (facultatif)',
    required: false,
    trim: true,
    select: [
        {
            text:'',
            value:'',
        },
        {
            text: "Homme",
            value: "homme",
        },
        {
            text: "Femme",
            value: "femme",
        },
    ],
});

AccountsTemplates.addField({
    _id: 'residence',
    type: 'select',
    displayName: 'Canton de résidence (facultatif)',
    required: false,
    trim: true,
    select: [
        {
            text:'',
            value:'',
        },
        {
            text: "Argovie (AG)",
            value: "canton1",
        },
        {
            text: "Appenzell Rhodes-Intérieures (AI)",
            value: "canton2",
        },
        {
            text: 'Appenzell Rhodes-Extérieures (AR)',
            value: 'canton3',
        },
        {
            text: "Berne (BE)",
            value: "canton4",
        },
        {
            text: "Bâle-Campagne (BL)",
            value: "canton5",
        },
        {
            text: 'Bâle-Ville (BS)',
            value: 'canton6',
        },
        {
            text: "Fribourg (FR)",
            value: "canton7",
        },
        {
            text: "Glaris (GL)",
            value: "canton8",
        },
        {
            text: 'Grisons (GR)',
            value: 'canton9',
        },
        {
            text: "Jura (JU)",
            value: "canton10",
        },
        {
            text: "Lucerne (LU)",
            value: "canton11",
        },
        {
            text: 'Neuchâtel (NE)',
            value: 'canton12',
        },{
            text: "Nidwald (NW)",
            value: "canton13",
        },
        {
            text: "Obwald (OW)",
            value: "canton14",
        },
        {
            text: 'Saint-Gall (SG)',
            value: 'canton15',
        },
        {
            text: "Schaffhouse (SH)",
            value: "canton16",
        },
        {
            text: "Soleure (SO)",
            value: "canton17",
        },
        {
            text: 'Schwytz (SZ)',
            value: 'canton18',
        },
        {
            text: "Thurgovie (TG)",
            value: "canton19",
        },
        {
            text: "Tessin (TI)",
            value: "canton20",
        },
        {
            text: 'Uri (UR)',
            value: 'canton21',
        },
        {
            text: "Vaud (VD)",
            value: "canton22",
        },
        {
            text: "Valais (VS)",
            value: "canton23",
        },
        {
            text: 'Zoug (ZG)',
            value: 'canton24',
        },
        {
            text:'Zurich (ZH)',
            value: 'canton25',
        },
    ],
});
