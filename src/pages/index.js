import React from 'react'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <div className="main">
    <Helmet>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1.0"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
    <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
      Diminuer son impact environnemental dans le voyage
    </h1>
    <p>
      En 2015, 1 186 000 000 touristes internationaux ont parcouru le monde. Il y en avait
      quasiment moitié moins il y a 15 ans. A l'heure de la démocratisation du voyage
      permettant la découverte de nouveaux horizons et de nouvelles cultures par le plus
      grand nombre, il est intéressant de s'orienter vers un voyage plus responsable. Afin
      de diminuer son impact environnemental au sens large, ce guide rappelle quelques
      bonnes pratiques en matière de transport, d'hébergement, d'alimentation et
      d'approche de la nature2. Le but est que chacun trouve des compromis pour mettre en
      place certains de ces gestes et choix afin que d'autres puissent profiter plus tard
      de la même qualité d'environnement. Il est maintenant acquis que les petits gestes
      et leur transmission sont la clé pour diminuer l'impact global et inscrire le voyage
      dans une démarche durable.
    </p>

    <h2 id="transports">
      <a href="#transports">Transports</a>
    </h2>

    <p>
      Dans nos envies de découverte nous sommes confrontés à deux paramètres
      incompressibles: l'espace et le temps. La durée du voyage et les lieux parcourus.
      Obligés d'agir en fonction de nos impératifs qui sont notre temps de vacances et
      notre envie d'ailleurs, nous concrétisons nos voyages avec les moyens qui nous sont
      donnés. L'avion est un moyen de transport magique qui nous projette ailleurs en un
      temps réduit. Son utilisation souvent incontournable en fonction de nos attentes
      doit être faite de manière consciente, le bas coût des billets n'est pas le seul
      paramètre et ne reflète pas la consommation d'énergie inhérente. Vous pouvez trouver
      la consommation de votre vol au départ de la France sur{' '}
      <a href="http://eco-calculateur.aviation-civile.gouv.fr/" target="_blank">
        http://eco-calculateur.aviation-civile.gouv.fr/
      </a>.
    </p>
    <blockquote cite="http://www.ademe.fr/vacances-kilometre">
      <em>
        L'infographie de l'Ademe "Des vacances au kilomètre"{' '}
        <a
          href="http://multimedia.ademe.fr/infographies/infographie_vacances/"
          target="_blank"
        >
          http://multimedia.ademe.fr/infographies/infographie_vacances/
        </a>{' '}
        présente clairement les problématiques.
      </em>
    </blockquote>

    <h3 id="modes-deplacement">
      <a href="#modes-deplacement">Les modes de déplacements</a>
    </h3>

    <p>
      Souvent bloqués par des congés annuels trop courts, nous souhaitons profiter au
      maximum de ce précieux temps. Le voyage lointain est une solution qui peut cependant
      ne pas être systématique.
    </p>
    <blockquote>
      <em>
        <strong>La rentabilité énergétique</strong> de nos billets d'avion augmentera avec
        le temps de voyage sur place et l'espacement de ces escapades lointaines.
      </em>
    </blockquote>
    <div className="headline">Arrivé sur place:</div>
    <p>
      Il est normal de vouloir voir le plus de choses possibles lors de son temps de
      vacances. C'est pourquoi dans la zone où nous allons, il arrive que nous prenions
      l'avion pour faire de plus nombreuses étapes et visites. Cependant, en supprimant
      les trajets qui nous permettent de découvrir le pays et les personnes qui y vivent
      nous les remplaçons par un transport aérien mondialement identique. Ainsi pour
      gagner quelques heures, nous survolons une part importante du voyage et consommons
      plus d'énergie.
    </p>
    <blockquote cite="https://seat61.com">
      <em>
        Rappelons-nous que dans de nombreux pays du monde le transport ferroviaire ainsi
        que fluvial est efficacement développé, pensez-y, ce sont des transports longues
        distances peu polluant vous trouverez sur le site{' '}
        <a href="https://seat61.com" target="_blank">
          seat61.com
        </a>{' '}
        des informations utiles sur le transport ferroviaire international.
      </em>
    </blockquote>
    <div className="headline">En ville:</div>
    <p>
      Pour découvrir une ville ayons le réflexe transport en commun, en plus de réduire le
      coût, le trafic et la consommation ce sont des moments que nous partageons avec les
      locaux dans leur quotidien. La location de vélo est également la bonne solution,
      rapide et permettant de s'arrêter à sa guise, cela nous rend indépendant dans notre
      découverte des lieux.
    </p>

    <h3 id="voyage-differement">
      <a href="#voyage-differement">Le voyage différemment</a>
    </h3>

    <h4 id="voyageurs-longue-duree">
      <a href="#voyageurs-longue-duree">Voyageurs longue durée vivez la continuité!</a>
    </h4>
    <p>
      Vous qui avez du temps, faites l'expérience de la continuité. L'Asie du sud-est peut
      être rejointe en train en quelques jours (une dizaine pour Paris-Hanoi), descendre
      en Afrique de l'Ouest par la route (une petite semaine pour un Montpellier-Dakar),
      ou encore aller en Amérique latine en bateau à voile, le transport devient un voyage
      inoubliable en lui-même et vous constaterez que ces horizons lointains sont bels et
      bien sur la même planète.
    </p>
    <br />
    <p>
      Nous devons accepter cette vérité:{' '}
      <strong>
        Nous n'aurons pas assez de temps pour parcourir et découvrir toutes les merveilles
        du monde
      </strong>. Autant s’imprégner d'une culture spécifique d'une zone de la planète
      plutôt que d'effleurer de nombreuses destinations où le peu de temps sur place ne
      nous permettra pas de sortir des sentiers battus et des pièges à touristes.
    </p>
    <blockquote>
      <em>
        Bien différent du transit aéroportuaire, le passage aux frontières terrestres
        permet d'observer les similitudes et les différences flagrantes entre les pays.
      </em>
    </blockquote>

    <h4 id="voyage-velo">
      <a href="#voyage-velo">Pourquoi ne pas voyager à vélo?</a>
    </h4>
    <p>
      Ce mode de déplacement permet de vivre le voyage différemment en découvrant de
      multiples détails. Le vélo donne également une satisfaction personnelle de la
      distance parcourue par ses propres moyens et facilite la rencontre du fait de la
      reconnaissance de l'effort accompli.
    </p>
    <p>
      <a href="https://fr.warmshowers.org" target="_blank">
        https://fr.warmshowers.org
      </a>{' '}
      est une plateforme de "touristes à vélo". Les ateliers collaboratifs de réparation
      de vélos présents dans de nombreuses villes, sont de très bonnes sources de
      renseignements. Pour trouver le plus proche de chez vous:{' '}
      <a href="https://www.heureux-cyclage.org" target="_blank">
        https://www.heureux-cyclage.org
      </a>
    </p>
    <blockquote>
      <em>
        N'oubliez pas que vous pouvez généralement charger vos vélos dans des transports
        en commun pour des longues ou pénibles étapes.
      </em>
    </blockquote>

    <h4 id="tangeante">
      <a href="#tangeante">Soyez original, prenez la tangente!</a>
    </h4>
    <p>
      A vous d'inventer votre voyage alternatif avec un mode de déplacement peu
      consommateur! Voici quelques exemples de voyageurs croisés peu commun:
    </p>
    <ul className="dashed">
      <li>Le retour aux sources: La marche accompagnée d'un âne.</li>
      <li>Le 2 en 1: Le canoë plié sur un vélo et vice versa.</li>
      <li>Le californien : La longue board.</li>
      <li>L'impatient: Le stoppeur en trottinette.</li>
    </ul>
    <blockquote>
      <em>
        Les plus grands marcheurs explorateurs comme Théodore Monod, décrivent la marche
        comme un mode de déplacement qui laisse le temps d'observer attentivement son
        environnement et permet de s'offrir du temps pour soi.
      </em>
    </blockquote>
    <em>
      Pour aller plus loin et avoir un aperçu global du voyage durable, vous pouvez
      feuilleter le passeport vert édité par l'ONU.{' '}
      <a href="http://www.unep.fr/greenpassport" target="_blank">
        http://www.unep.fr/greenpassport
      </a>
    </em>

    <h2 id="hebergements">
      <a href="#hebergements">Hébergements</a>
    </h2>

    <h3 id="economie-energie">
      <a href="#economie-energie">Les économies d'énergie</a>
    </h3>
    <p>
      Qu'importe le niveau de confort de notre hébergement, nous pouvons réaliser de{' '}
      <strong>simples gestes qui réduisent la consommation d'énergie</strong>.
    </p>
    <p>
      Dans l'ordre décroissant les principaux postes consommateurs du logement sont le
      rafraîchissement et le chauffage, l'eau chaude sanitaire, l'énergie utilisée pour
      laver le linge et l’électricité spécifique (celle des prises de courant).
    </p>
    <blockquote>
      <em>
        Le fait que nous ayons payé une prestation ne se transcrit pas par l'obligation de
        "consommer" le plus possible. De la même manière que chez soi, gardons les bons
        réflexes.
      </em>
    </blockquote>

    <h4 id="gestion-temperature">
      <a href="#gestion-temperature">Gestion de la température</a>
    </h4>
    <p>
      <strong>
        Éteignez la clim et le chauffage lorsque vous n'êtes pas dans la chambre, idem
        pour le ventilateur
      </strong>. Les systèmes ont une réactivité importante et l'inconfort au retour dure
      moins de quelques minutes. Notons que le ventilateur allumé inutilement produit de
      la chaleur par son fonctionnement.
    </p>
    <p>
      Posons-nous ces questions: Le rafraîchissement est-il nécessaire? La température
      n'est-elle pas trop froide? Doit-on dormir avec une couverture et la clim allumée?
    </p>
    <p>
      Il est souvent possible de programmer un arrêt de la climatisation ou du chauffage
      au cours de la nuit.
    </p>
    <p>
      Diminuer les apports de chaleur externe et interne en fermant bien les volets et les
      rideaux la journée et en débranchant les appareils électriques inutiles.
    </p>

    <h4 id="debranchez-tout">
      <a href="#debranchez-tout">Débranchez tout!</a>
    </h4>
    <p>
      En vacances continuons à traquer les consos d'énergie! Outre le grand classique de
      la lumière allumée nous pouvons débrancher les appareils électriques que nous
      n'utilisons pas comme la télé ou le réfrigérateur. De même débranchez-vous!
      Éteignons nos portables, déconnectons nous, les vacances servent à ça. Dans le cas
      où vous gardez votre téléphone allumé pensez à déconnecter les applications
      énergivores, comme la géolocalisation et de le mettre en mode avion.
    </p>

    <h3 id="economie-eau">
      <a href="#economie-eau">Économie d'eau</a>
    </h3>
    <p>
      Tout le monde a déjà pris des douches plus longues et plus nombreuses en vacances.
      Pour se rincer, pour se réchauffer, pour se laver, la douche est également
      considérée comme un plaisir. Il est important de trouver un compromis et de diminuer
      le temps d'écoulement d'eau.
    </p>
    <blockquote>
      <em>
        N'oublions pas que certaine région sont en stress hydraulique notamment dans les
        pics saisonniers et que l'utilisation excessive de cette ressource naturelle à des
        impacts environnementaux importants.
      </em>
    </blockquote>
    <p>
      Les économies d'eau, dont l’intérêt est facilement saisissable rejoignent les
      économies d'énergie. Dans les pays chauds à faible demande de chaleur, l'eau est
      chauffée par des systèmes électriques directs peu coûteux à l'installation mais fort
      consommateurs d'énergie.
    </p>

    <h4 id="produits-hygiene">
      <a href="#produits-hygiene">Les produits d'hygiène</a>
    </h4>
    <p>
      D'autant plus qu'à la maison, les rejets des produits d'hygiène (savon, shampoing,
      dentifrice, lessive, etc.) ont un impact sur l'environnement notamment dû au manque
      d'assainissement efficace. C'est pourquoi en voyage il est important de favoriser
      des <strong>produits naturels</strong> à faible impact sur l'environnement.
    </p>
    <br />
    <p>
      Les crèmes solaires sont des émulsions d'huile contenant des filtres UV et de
      nombreux additifs notamment de texture. Les filtres UV sont organiques de synthèse
      ou des filtres minéraux (classiques ou a nanoparticules). Les filtres de synthèse
      (et ses additifs), en plus d'être suspectés d'être des perturbateurs endocriniens,
      sont néfastes pour les milieux aquatiques notamment les coraux. Les filtres minéraux
      a nanoparticules sont décriés du fait de leur absorption par le corps. Le problème
      réside également dans les additifs pour faciliter l'étalement.
    </p>
    <blockquote>
      <em>
        Les cahiers des charges des crèmes bio (Cosmébio, BDIH, Nature & Progrès…) doivent
        garantir l'absence de produits toxiques (sans écran chimique, sans filtres
        minéraux à nano particules, sans parabène, etc.) De manière logique, elles
        s'étalent moins bien mais en contrepartie diminue le risque sanitaire et
        environnemental, à vous de choisir!
      </em>
    </blockquote>
    <p>
      Nous pouvons également diminuer notre consommation{' '}
      <strong>en nous exposant moins au soleil</strong>, comme avoir un lycra aux manches
      longues pour faire du masque et tuba ou s'allonger à l'ombre. La meilleure des
      crèmes reste celle qui n'est pas utilisée! Pensez tout de même à vous protéger
      efficacement du soleil.
    </p>
    <br />
    <p>
      De nombreuses cultures n'utilisent pas de papier toilette, se rincer à l'eau en plus
      d'être nettement plus hygiénique diminue la consommation de papier. Prenez le coup
      de main! Cela pourra vous sortir de situations délicates. Dans le cas de son
      utilisation il se jette rarement dans les toilettes dont le réseau et
      l'assainissement ne sont pas prévus pour ça.
    </p>
    <p>
      Pour les femmes, l'utilisation de la <strong>Moon-cup</strong> notamment en long
      voyage, est une solution qui s'avère pratique tout en réduisant les déchets. Il est
      parfois difficile et onéreux de trouver des tampons et serviettes hygiéniques à
      l’étranger.
    </p>
    <br />
    <p>
      Les hôtels ont tendance à faire des "cadeaux", le plus souvent à usage unique, à
      part d'être collectionneur, vous pouvez utiliser votre propre savon ou dentifrice au
      lieu de gaspiller de multiples emballages. Il en est de même pour les petites
      bouteilles d'eau.
    </p>
    <blockquote>
      Les hébergements fournissent des serviettes de toilette. Lorsque vous passez une
      nuit uniquement, celle-ci sera lavée alors qu'elle ne vous aura servi qu'une seule
      fois. Vous pouvez utiliser votre serviette de voyage ou si vous êtes 2, utilisez
      qu'une seule serviette. Vous faites d'une pierre 3 coups! Économie d'eau, d'énergie
      et de lessive!
    </blockquote>
    <p>
      Il n'est pas nécessaire de se pencher sur le problème des rasoirs jetable. Sachez
      d'ailleurs Messieurs, d’autant plus en voyage, la mousse à raser ne sert à rien! Un
      peu de savon suffit largement.
    </p>

    <h2 id="alimentation">
      <a href="#alimentation">Alimentation</a>
    </h2>

    <h3 id="diminuons-dechets">
      <a href="#diminuons-dechets">Diminuons nos déchets</a>
    </h3>
    <p>
      On ne peut pas critiquer la présence de déchet dans les pays visités si soi-même
      nous en produisons sur place une quantité importante. Les filières de traitement des
      déchets et de recyclage peuvent être peu développées, artisanales ou inexistantes.{' '}
      <strong>Le plastique à usage unique est l'une des plaies de notre époque</strong>.
      La seule solution viable est de diminuer la production de déchet par de simples
      gestes de consommation quotidiens.
    </p>

    <br />

    <div className="headline">
      Les bouteilles en plastiques engendrent une pollution considérable:
    </div>
    <p>
      Cette infographie{' '}
      <a href="http://trademachines.fr/info/eau-en-bouteille" target="_blank">
        http://trademachines.fr/info/eau-en-bouteille
      </a>{' '}
      résume l'aberration de l'eau en bouteille. Dans les pays où l'eau n'est pas potable,
      il est possible de ne pas acheter de bouteille à usage unique. Munissez-vous d'une
      gourde au contenu suffisamment important (1L au minimum). Les hôtels et restaurant
      peuvent remplir votre gourde (dites-leur s'ils hésitent que vous êtes prêt à
      payer!), il existe également dans certains pays des distributeurs urbain d'eau
      filtrée. Tout simplement profitez d'un grand thé glacé ou d'un bon jus de fruit
      frais pour étancher votre soif.
    </p>
    <p>
      Il est également utile, notamment en randonnée, d'avoir un filtre miniature ou des
      petites pastilles de chlore permettant de rendre potable tout type d'eau.
    </p>
    <blockquote>
      <em>
        Offrez-vous <strong>une paille réutilisable</strong> ! (métal, bambou, verre...)
        et refusez les pailles en plastique systématiquement présentes dans les boissons
        fraîches.
      </em>
    </blockquote>

    <br />

    <div className="headline">Apprenons à refuser les sacs plastiques:</div>
    <p>
      Cela peut paraître difficile mais avec un peu d'assurance nous y arrivons! Emportez
      dans vos bagages des sacs en toile (lavable donc) pour les courses qui pourront
      également servir pour mettre votre linge sale et le donner aux laveries.
    </p>
    <blockquote>
      <em>
        <p>
          Pour les fumeurs, investissez dans un briquet rechargeable, en plus de diminuer
          les déchets ça a bien plus la classe! Vous tenez un carnet de voyage?
        </p>
        <p>
          Complétez votre panoplie de reporter avec un stylo rechargeable et bannissez les
          jetables!
        </p>
      </em>
    </blockquote>

    <br />

    <div className="headline">Street food et take away:</div>
    <p>
      Nous l'avons tous constaté à maintes reprises: la quantité de déchet importante à la
      fin d'un repas à emporter. C'est un déchet qui n'est pas difficile à éviter. Il
      suffit de tendre sa gamelle de voyage (et pour les sédentaires, sa gamelle de
      bureau!) ou un Tupperware. Nous pouvons également favoriser les vendeurs qui
      utilisent des emballages non plastiques. De même pour les boissons, favorisons les
      endroits où l'on sert dans des verres et tasses réutilisables. Prenez le temps de
      boire sur place et sinon, pour emporter, nous pouvons utiliser nos gobelets de
      voyage.
    </p>

    <h3 id="nos-assiettes">
      <a href="#nos-assiettes">Dans nos assiettes</a>
    </h3>
    <p>
      Manger comme les habitants fait partie du voyage et de sa découverte. Un restaurant
      local où il y a du monde, utilise forcement des produits plus frais qu'un restaurant
      touristique avec une carte immense nécessitant un congélateur. C'est également l'un
      des moyens pour faire tourner l'économie locale et d'orienter l'argent vers les
      petites poches.
    </p>
    <br />
    <p>
      Pour connaître les fruits et légumes de saison, ceux à favoriser car non importés,
      faites un tour au marché qui est le cœur représentatif de la vie locale. Profitez-en
      pour vous gaver de fruits exotiques, ceux-là même que nous évitons de consommer chez
      nous car importés du bout du monde.
    </p>
    <p>
      Cela peut paraître évident mais ne mangez pas d'animaux sauvages ou protégés, ce
      n'est pas parce que c'est disponible et que les locaux en mangent qu'il faut créer
      une demande supplémentaire. Si vous avez un doute, n'en mangez pas.
    </p>
    <blockquote cite="http://ddc.arte.tv/emission/des-oceans-sans-poissons">
      <em>
        <p>
          Vous craignez l'origine et la fraîcheur de certaines viandes, poissons ou œuf?
          Profitez-en pour découvrir l'alimentation végétarienne !
        </p>
        <p>
          Alors que la question de l'élevage industriel n'est plus à présenter, celle de
          la pêche est également préoccupante. Cette émission du dessous des cartes
          illustre la problématique de la consommation de poissons.
          <a href="http://ddc.arte.tv/emission/des-oceans-sans-poissons" target="_blank">
            http://ddc.arte.tv/emission/des-oceans-sans-poissons
          </a>
        </p>
      </em>
    </blockquote>

    <h2 id="approche-nature">
      <a href="#approche-nature">Approche de la nature</a>
    </h2>
    <p>
      Notre envie de découverte de zones et d'animaux sauvages peut avoir des impacts
      opposés:
    </p>
    <ul className="dashed">
      <li>
        Le premier positif, promouvant la conservation des milieux naturels en alternative
        à une industrie destructive.
      </li>
      <li>
        L'autre négatif du fait de la surexploitation du milieu avec la création
        d'infrastructures, la pollution induite et nos comportements inadaptés dus à la
        méconnaissance des bonnes pratiques.
      </li>
    </ul>
    <blockquote>
      <em>
        Nous devons donc encourager un tourisme en direction des écosystèmes tout en nous
        informant des comportements à adapter en adéquation avec le milieu.
      </em>
    </blockquote>

    <h3 id="milieux-naturels">
      <a href="#milieux-naturels">Visiter les milieux naturels</a>
    </h3>
    <p>L’impact sur le milieu dépend de plusieurs critères:</p>
    <ul className="dashed">
      <li>
        Le type d'activité. Nous diminuons notre empreinte en pratiquant la randonné ou le
        VTT plutôt qu’une activité mécanique (moto, quad) ou encore le kayak face au jet
        ski ou autre bateau à moteur.
      </li>
      <li>
        La fréquentation des zones et l'amplitude. Même si l’activité a un impact léger,
        si nous le pouvons, évitons les sites naturels surchargés ou du moins les périodes
        où ils le sont plus.
      </li>
      <li>
        La période de l'année et la zone de dérangement. Les périodes et sites de
        reproduction peuvent être fragilisés.
      </li>
    </ul>

    <h3 id="nouveaux-espaces">
      <a href="#nouveaux-espaces">Découvrons de nouveaux espaces !</a>
    </h3>
    <p>
      Dans les milieux naturels proches de chez nous, nous connaissons les règles à
      respecter ainsi que les espèces à préserver qui y vivent. En voyage nous sommes dans
      un milieu que nous ne connaissons pas avec des espèces tout aussi inconnues. Nous
      avons d'autant plus envie de nous en approcher.
    </p>
    <ul className="dashed">
      <li>
        La première étape est de se renseigner sur la surexploitation touristique des
        lieux. Evitons d'aller dans ces zones si jolies soient elles.
      </li>
      <li>
        <strong>S'informer localement</strong>. Quasiment partout dans le monde il est
        possible de trouver une structure locale qui présente le milieu et explique les
        bonnes pratiques. Cela peut être le bureau du parc naturel, ou encore une ONG qui
        travaille localement sur l’environnement.
      </li>
    </ul>
    <blockquote>
      <em>
        Des chartres et codes de bonnes pratiques peuvent avoir été rédigés et affichés,
        ils permettent toujours d’apprendre des détails sur le milieu.
      </em>
    </blockquote>
    <p>
      Dans le cadre d’excursions encadrées par une structure, renseignez-vous sur celle-ci
      et favorisez celle dont l’impact social et environnemental est le plus favorable.
      Forcément le prix de l’excursion sera plus élevé, faisons donc moins d'excursions
      mais faisons les dans un cadre respectueux.
    </p>

    <h3 id="rejets">
      <a href="#rejets">Les rejets</a>
    </h3>
    <p>
      Avant de partir à l’aventure, éliminons les emballages, emmenons nos aliments dans
      des contenants réutilisables. De même, ramenons tous nos déchets, il est préférable
      de ne pas remplir les poubelles des sites éloignés où la collecte est difficile (si
      le contenu n'est pas simplement brûlé).
    </p>
    <br />
    <p>
      Les cours d'eau sont à préserver, pour se laver ou nettoyer, en plus d’utiliser des
      produits naturels, il est préférable de puiser l’eau et se laver un peu plus loin
      pour que la végétation fasse un premier filtre.
    </p>
    <p>
      Alors que l’urine pose moins de problème, les excréments sont fortement chargés en
      germes pathogènes. S'il n'y a pas de toilette, il est important de creuser un trou
      de 30cm de profondeur et d'être au moins à 50 mètres de l'eau (ruisseau, lac, etc.).
    </p>

    <h3 id="observation-faune">
      <a href="#observation-faune">Observation de la faune</a>
    </h3>
    <p>
      Le dérangement des animaux peut provoquer une augmentation de la mortalité notamment
      des petits délaissés par la fuite des parents et diminue également la possibilité de
      reproduction.
    </p>
    <p>
      Nous pouvons utiliser des jumelles, un télescope ou le zoom d’un appareil photo pour
      mieux voir les animaux et la flore, sans avoir besoin de s’en approcher. Lorsque
      l’on s’en approche il est préférable de le faire de manière détournée plutôt que
      directe, afin de diminuer le risque de stress. Si les animaux manifestent des signes
      d’inquiétude ou réagissent à l’approche en s’éloignant il est nécessaire de stopper
      l’approche.
    </p>
    <p>
      Même s’il est parfois plus tentant d’approcher des jeunes, il est important d’être
      encore plus prudent, en raison du risque de séparation du couple mère-petit(s) et du
      risque d’une réaction agressive des parents.
    </p>
    <br />
    <p>
      <strong>Ne donnons pas à manger aux animaux</strong>, même les aliments qui existent
      dans leur régime alimentaire naturel. Certains deviennent dépendants et n’arrivent
      plus à se nourrir d’eux même.
    </p>
    <blockquote>
      <em>
        Nourrir les animaux peut modifier profondément leurs comportements, les rendre
        malades ou agressifs.
      </em>
    </blockquote>
    <p>
      De même, nous rencontrons parfois des "dompteurs" qui utilisent à des fins
      touristiques des animaux sauvages voir protégés. N'encourageons pas ces pratiques en
      prenant des photos avec ces animaux ou en regardant des mises en scène.
    </p>

    <h3 id="sous-leau">
      <a href="#sous-leau">En visite sous l'eau</a>
    </h3>
    <p>
      Dans l'eau, nous sommes invités dans un milieu fragile, profitons du spectacle sans
      toucher notre environnement. Attention de ne pas marcher sur le corail ou de le
      toucher en palmant. Par conséquent, nous devons éviter de nager dans de l'eau peu
      profonde (certains spots ne sont donc pas praticables en marée basse).
    </p>
    <p>
      Protégez-vous du soleil avec un tee-shirt ou un lycra à manches longues plutôt
      qu'avec de la crème solaire que l'on évite de mettre juste avant de rentrer dans
      l'eau.
    </p>
    <blockquote cite="https://www.surfrider.eu/">
      <em>
        Vous pouvez également vous engager dans une des nombreuses associations qui
        militent pour le milieu marin comme{' '}
        <a href="https://www.surfrider.eu/" target="_blank">
          Surfrider
        </a>{' '}
        orienté contre la pollution océanique.
      </em>
    </blockquote>

    <table>
      <tr>
        <th>
          <h3 id="incontournable">
            <a href="#incontournable">L'incontournable du sac de voyage</a>
          </h3>
        </th>
        <th>
          <h3>Les déchets ou impacts évités pour une personne durant un mois</h3>
        </th>
      </tr>
      <tr>
        <td>
          <ul className="dashed">
            <li>Une gourde de plus d'un litre</li>
            <li>Des pastilles de traitement de l'eau et/ou un mini-filtre.</li>
            <li>Paille réutilisable</li>
          </ul>
        </td>
        <td>
          <ul className="dashed">
            <li>
              <strong>29</strong> grandes bouteilles d’eau et 20 petites bouteilles
            </li>
            <li>
              <strong>83</strong> pailles en plastique{' '}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <ul className="dashed">
            <li>
              Couverts, assiettes et gobelets (la fameuse gamelle).
              <blockquote>
                <em>Si vous n'en avez pas, réutilisez les gobelets à "usage unique"</em>
              </blockquote>
            </li>
            <li>
              Tupperware pour stocker de la grignote, récupérer de la street food ou
              acheter du vrac.
            </li>
            <li>Des sacs lavables, en tissu par exemple.</li>
          </ul>
        </td>
        <td>
          <ul className="dashed">
            <li>
              <strong>20</strong> barquettes polystyrène
            </li>
            <li>
              <strong>47</strong> sacs plastiques
            </li>
            <li>
              <strong>15</strong> couverts en plastique
            </li>
            <li>
              <strong>40</strong> Gobelets en plastiques, etc.
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          <ul className="dashed">
            <li>
              Produits d'hygiène aux composants naturels
              <blockquote>
                <em>
                  Le savon de Marseille est parfait pour le voyage, on peut faire sa
                  lessive avec et laver ses ustensiles !
                </em>
              </blockquote>
            </li>
            <li>Un lycra pour faire du masque et tuba sans crème solaire.</li>
          </ul>
        </td>
        <td>
          <ul className="dashed">
            <li>Des rejets non traités moins nocifs pour le milieu naturel</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <ul className="dashed">
            <li>Une paire de jumelle pour l'observation de la vie sauvage</li>
            <em>
              En revanche n'oubliez pas de rapporter à la maison et recycler vos piles
              usagés et celles que vous trouverez !
            </em>
          </ul>
        </td>
      </tr>
    </table>

    <br />
    <br />
    <h2 id="en-route">
      <a href="#en-route">Alors en route!</a>
    </h2>
    <p>
      Les vacances et les voyages ne riment pas avec contraintes, cependant de simples
      gestes et choix peuvent permettre de diminuer notre impact un tant soit peu. Il est
      important de trouver ses compromis et d'avoir conscience de l'empreinte de nos
      actions.
    </p>
    <p>
      Voyager de manière responsable est une continuité d'une transition nécessaire et
      diffuse un mode de consommation durable.
    </p>
    <p>
      N'hésitez pas à communiquer sur les démarches que vous faîtes, à expliquer vos choix
      et surtout à apprécier votre voyage en l'inscrivant dans une approche plus
      respectueuse de l'environnement.
    </p>

    <br />
    <br />
    <br />
    <hr />
    <h2>
      <a href="#documentation-sources">Documentations et sources</a>
    </h2>
    <ul className="dashed">
      <li>
        Le passeport vert de l'ONU:{' '}
        <a target="_blank" href="http://www.unep.fr/greenpassport">
          http://www.unep.fr/greenpassport
        </a>
      </li>
      <li>
        Guides de l'Ademe:
        <ul className="dashed">
          <li>
            "vacances au kilomètre":{' '}
            <a target="_blank" href="http://www.ademe.fr/vacances-kilometre">
              http://www.ademe.fr/vacances-kilometre
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://multimedia.ademe.fr/infographies/infographie_vacances/"
            >
              http://multimedia.ademe.fr/infographies/infographie_vacances/
            </a>
          </li>
          <li>
            "les bons ecogestes en vacances"
            <a
              target="_blank"
              href="http://www.ademe.fr/particuliers-eco-citoyens/vacances-loisirs/passer-vacances-plus-ecologiques/bons-gestes-ecologiques-vacances"
            >
              http://www.ademe.fr/particuliers-eco-citoyens/vacances-loisirs/passer-vacances-plus-ecologiques/bons-gestes-ecologiques-vacances
            </a>
          </li>
          <li>
            "vacances d'hiver"
            <a
              target="_blank"
              href="http://www.ademe.fr/particuliers-eco-citoyens/vacances-loisirs/passer-vacances-plus-ecologiques/sports-dhiver"
            >
              http://www.ademe.fr/particuliers-eco-citoyens/vacances-loisirs/passer-vacances-plus-ecologiques/sports-dhiver
            </a>
          </li>
        </ul>
      </li>
      <li>
        Consommation aviation, calculateur (français):{' '}
        <a
          target="_blank"
          href="http://eco-calculateur.aviation-civile.gouv.fr/comment_ca_marche.html"
        >
          http://eco-calculateur.aviation-civile.gouv.fr/comment_ca_marche.html
        </a>{' '}
        Réalisé notamment avec le CITEPA{' '}
        <a target="_blank" href="http://www.citepa.org/fr/">
          http://www.citepa.org/fr/
        </a>
      </li>
      <li>
        Association qui milite contre la pollution océanique:{' '}
        <a target="_blank" href="https://www.surfrider.eu">
          https://www.surfrider.eu
        </a>
      </li>
      <li>
        Association orientée vers la montagne:{' '}
        <a target="_blank" href="http://www.mountain-riders.org">
          http://www.mountain-riders.org
        </a>
      </li>
      <li>
        Océan sans poisson{' '}
        <a
          target="_blank"
          href="http://ddc.arte.tv/autour-du-sujet/des-oceans-sans-poissons"
        >
          http://ddc.arte.tv/autour-du-sujet/des-oceans-sans-poissons
        </a>
      </li>
      <li>
        Bouteille plastique:
        <a
          target="_blank"
          href="https://mrmondialisation.org/la-face-cachee-des-bouteilles-en-plastique/"
        >
          https://mrmondialisation.org/la-face-cachee-des-bouteilles-en-plastique/
        </a>
        <a target="_blank" href="http://trademachines.fr/info/eau-en-bouteille">
          http://trademachines.fr/info/eau-en-bouteille
        </a>
      </li>
      <li>
        Voyage en vélo:{' '}
        <a target="_blank" href="https://fr.warmshowers.org">
          https://fr.warmshowers.org
        </a>{' '}
        <a target="_blank" href="https://www.heureux-cyclage.org" />
      </li>
      <li>
        Voyage en train:{' '}
        <a target="_blank" href="https://seat61.com">
          seat61.com
        </a>
      </li>
      <li>
        Article sur la consommation d'eau:
        <a
          target="_blank"
          href="http://www.lemonde.fr/ressources-naturelles/article/2015/03/20/la-crise-de-l-eau-illustree-en-5-graphiques_4597592_1652731.html"
        >
          http://www.lemonde.fr/ressources-naturelles/article/2015/03/20/la-crise-de-l-eau-illustree-en-5-graphiques_4597592_1652731.html
        </a>
      </li>
      <li>
        Petit guide du bon comportement dans la nature P. Triplet :
        <a
          target="_blank"
          href="http://medwet.org/wp-content/uploads/2016/05/Petit-guide-nature.pdf"
        >
          http://medwet.org/wp-content/uploads/2016/05/Petit-guide-nature.pdf
        </a>
      </li>
    </ul>
    <br />
    <hr />
    <br />
    <p>Auteur: Arthur Goubet (contact: arthurgoubet@hotmail.com)</p>
    <p>
      Réalisation: Charles Ahmadzadeh, code source disponibles sur{' '}
      <a href="https://github.com/superzadeh/voyage-responsable" target="_blank">
        Github
      </a>
    </p>
    <p>
      Pour toutes suggestions, n'hésitez pas à{' '}
      <a href="https://github.com/superzadeh/voyage-responsable/issues" target="_blank">
        créer une Issue
      </a>{' '}
      sur Github.
    </p>
  </div>
)

export default IndexPage
