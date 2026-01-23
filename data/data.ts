export interface service {
  id: number;
  url: string;
  src: string;
  title: string;
  description: string;
}

export const servicesList: service[] = [
  {
    id: 1,
    url: '#',
    src: '/img/urgences.jpeg',
    title: "Service d'Urgences 24h/24 et 7j/7",
    description: `En cas d’urgence, n’hésitez pas à nous contacter immédiatement. Notre priorité est votre santé et votre bien-être.`,
  }
,
  {
    id: 2,
    url: '#',
    src: '/img/consultation.png',
    title: 'Consultations médicales',
    description: `Nos consultations sont disponibles sur rendez-vous, et nous proposons également des consultations d'urgence pour des situations imprévues.
    Prenez soin de votre santé dès aujourd'hui et contactez-nous pour prendre rendez-vous !`,
  },
  {
    id: 3,
    url: '#',
    src: '/img/Pédiatrie.jpg',
    title: 'Pédiatrie',
    description: `Le bien-être de vos enfants est notre priorité. N'hésitez pas à prendre rendez-vous avec notre pédiatre pour des consultations régulières ou toute question de santé.`,
  },
  {
    id: 4,
    url: '#',
    src: '/img/radiologie.jpeg',
    title: 'Radiologie & Imagerie médicale',
    description: `Que vous ayez besoin d'un contrôle de routine ou d’un examen spécialisé, notre service de radiologie est à votre disposition pour vous offrir un diagnostic précis et rapide. Contactez-nous dès aujourd'hui pour prendre rendez-vous.`,
  },
  {
    id: 5,
    url: '#',
    src: '/img/Gyneco.jpeg',
    title: 'Gynécologie & Obstétrique',
    description: `Que ce soit pour un suivi régulier, un besoin de conseils ou une consultation spécialisée, notre service de gynécologie et obstétrique est là pour vous offrir des soins adaptés à chaque étape de votre vie. Contactez-nous pour prendre rendez-vous.`,
  },
  {
    id: 6,
    url: '#',
    src: '/img/Cardiologie.jpeg',
    title: 'Cardiologie',
    description: `Que vous soyez à la recherche d'un suivi régulier ou d'un traitement spécifique, notre service de cardiologie est là pour vous offrir une prise en charge complète et de qualité. Contactez-nous dès maintenant pour prendre rendez-vous.`,
  },
  {
    id: 7,
    url: '#',
    src: '/img/Pneumologie.jpeg',
    title: 'Pneumologie',
    description: `Que ce soit pour un simple contrôle, un diagnostic spécifique ou un suivi médical, notre service de pneumologie est là pour vous accompagner dans la gestion de votre santé respiratoire. Contactez-nous pour prendre rendez-vous.`,
  },
  {
    id: 8,
    url: '#',
    src: '/img/Neurologie.jpeg',
    title: 'Neurologie',
    description: `Si vous ressentez des symptômes neurologiques inquiétants ou si vous avez besoin d'un suivi pour une pathologie existante, notre service de neurologie est là pour vous accompagner. Contactez-nous dès aujourd'hui pour prendre rendez-vous.`,
  },
  {
    id: 9,
    url: '#',
    src: '/img/Gastro.jpeg',
    title: 'Gastro-entérologie',
    description: `Que vous souffriez de symptômes digestifs réguliers ou que vous ayez besoin d'un suivi pour une pathologie existante, notre service de gastro-entérologie est à votre disposition pour vous fournir un diagnostic précis et des solutions adaptées à vos besoins. Contactez-nous dès maintenant pour prendre rendez-vous.`,
  },
  {
    id: 10,
    url: '#',
    src: '/img/Urologie.jpeg',
    title: 'Urologie',
    description: `Si vous avez des problèmes urinaires ou reproducteurs, notre service d'urologie est là pour vous accompagner à chaque étape. Contactez-nous dès maintenant pour prendre rendez-vous et obtenir des soins adaptés à vos besoins.`,
  },
  {
    id: 11,
    url: '#',
    src: '/img/Néphrologie.jpeg',
    title: 'Néphrologie',
    description: `Que vous soyez à la recherche d'un diagnostic, d'un traitement ou d'un suivi pour une pathologie rénale, notre service de néphrologie est là pour vous accompagner. Contactez-nous dès maintenant pour prendre rendez-vous et obtenir des soins adaptés à vos besoins.`,
  },
  {
    id: 12,
    url: '#',
    src: '/img/Endocrinologie.jpeg',
    title: 'Endocrinologie',
    description: `Que vous ayez besoin de conseils, d'un diagnostic ou d'un suivi pour un trouble hormonal, notre service d'endocrinologie est à votre disposition pour vous offrir des soins adaptés à vos besoins. Contactez-nous dès maintenant pour prendre rendez-vous.`,
  },
  {
    id: 13,
    url: '#',
    src: '/img/Rhumatologie.jpeg',
    title: 'Rhumatologie',
    description: `Prenez soin de vos articulations et de vos muscles dès aujourd'hui Que vous souffriez de douleurs articulaires, de maladies chroniques ou que vous ayez besoin d'un suivi spécialisé, notre service de rhumatologie est là pour vous accompagner. Contactez-nous dès maintenant pour prendre rendez-vous et obtenir des soins adaptés à vos besoins.`
  },
  // {
  //   id: 14,
  //   url: '#',
  //   src: '/img/Oncologie.jpeg',
  //   title: 'Oncologie',
  //   description: `Si vous êtes concerné par le cancer ou si vous souhaitez obtenir des informations ou un suivi médical, notre service d'oncologie est à votre disposition pour vous offrir les meilleurs soins et un accompagnement personnalisé. Contactez-nous pour prendre rendez-vous et bénéficier d’une prise en charge complète.`,
  // },
  {
    id: 15,
    url: '#',
    src: '/img/Hospitalisation.jpeg',
    title: 'Hospitalisation & Soins continus',
    description: `Si vous ou un proche avez besoin d’une hospitalisation ou de soins continus, notre service est là pour vous fournir les meilleurs soins et un suivi constant. Contactez-nous dès maintenant pour prendre rendez-vous ou pour toute information complémentaire.`,
  },
  {
    id: 16,
    url: '#',
    src: '/img/ChirurgieGenerale.jpeg',
    title: 'Chirurgie Générale',
    description: `Si vous ou un proche avez besoin d'une intervention chirurgicale, notre service de chirurgie générale est là pour vous fournir des soins chirurgicaux de qualité. Contactez-nous dès maintenant pour prendre rendez-vous ou pour toute information complémentaire.`,
  },
  {
    id: 17,
    url: '#',
    src: '/img/Orthopedie.jpeg',
    title: 'Chirurgie Orthopédique & Traumatologie',
    description: `Que vous souffriez de douleurs chroniques, d'une blessure récente ou que vous ayez besoin d'une intervention chirurgicale, notre service de chirurgie orthopédique et traumatologie est là pour vous fournir des soins adaptés à vos besoins. Contactez-nous dès maintenant pour prendre rendez-vous.`,
  },
  {
    id: 18,
    url: '#',
    src: '/img/Ophtalmologie.jpeg',
    title: 'Ophtalmologie',
    description: `Que ce soit pour une consultation de routine, un diagnostic spécialisé ou une intervention chirurgicale, notre service d'ophtalmologie est là pour vous offrir les meilleurs soins pour votre santé oculaire. Contactez-nous dès maintenant pour prendre rendez-vous.`,
  },
  {
    id: 19,
    url: '#',
    src: '/img/ORL.jpeg',
    title: 'ORL (Oto-Rhino-Laryngologie)',
    description: `Si vous avez des problèmes liés à vos oreilles, nez ou gorge, notre service d'ORL est là pour vous offrir les meilleurs soins et solutions. Contactez-nous dès maintenant pour prendre rendez-vous et obtenir un diagnostic précis et un traitement adapté à vos besoins.`,
  },
  {
    id: 20,
    url: '#',
    src: '/img/Neurochirurgie.jpeg',
    title: 'Neurochirurgie',
    description: `Si vous ou un proche souffrez d'une pathologie nécessitant une intervention neurochirurgicale, notre service est là pour vous fournir les meilleurs soins. Contactez-nous dès maintenant pour prendre rendez-vous et discuter des options de traitement adaptées à vos besoins.`,
  },
  {
    id: 21,
    url: '#',
    src: '/img/Laboratoire.jpeg',
    title: 'Laboratoire d’Analyses Médicales',
    description: `Faites confiance à notre laboratoire pour vos analyses médicales Que vous ayez besoin d’un bilan de santé de routine ou d’une analyse spécialisée, notre laboratoire est à votre disposition pour vous offrir des résultats précis et fiables. Contactez-nous dès maintenant pour prendre rendez-vous ou pour toute information supplémentaire sur nos services.`,
  },
  {
    id: 22,
    url: '#',
    src: '/img/Reanimation.jpeg',
    title: 'Réanimation & Soins intensifs',
    description: `En cas de besoin en soins intensifs, notre service de réanimation est là pour vous offrir des soins urgents et spécialisés. Si vous ou un proche avez besoin de soins intensifs, contactez-nous pour toute information complémentaire ou pour connaître nos protocoles d’admission.`,
  },
  {
    id: 23,
    url: '#',
    src: '/img/Pharmacie.jpeg',
    title: 'Pharmacie Hospitalière',
    description: `Que vous soyez hospitalisé pour une maladie aiguë, une chirurgie ou une prise en charge chronique, notre service de pharmacie hospitalière vous accompagne pour garantir l'optimisation et la sécurité de vos traitements. Contactez-nous pour toute information complémentaire ou pour connaître nos services spécifiques.`,
  },
  // {
  //   id: 24,
  //   url: '#',
  //   src: '/img/Kinesitherapie.jpeg',
  //   title: 'Kinésithérapie & Rééducation',
  //   description: 'Réadaptation fonctionnelle après une maladie, un accident ou une intervention.',
  // },
  // {
  //   id: 25,
  //   url: '#',
  //   src: '/img/Dietetique.jpeg',
  //   title: 'Nutrition & Diététique',
  //   description: 'Suivi nutritionnel et accompagnement diététique personnalisé.',
  // },
  // {
  //   id: 26,
  //   url: '#',
  //   src: '/img/Psychologie.jpeg',
  //   title: 'Psychologie & Santé mentale',
  //   description: 'Accompagnement psychologique et soutien émotionnel des patients.',
  // },
];

export const servicesdetails: service[] = [
  {
    id: 1,
    url: '#',
    src: '/img/urgences.jpeg',
    title: "Service d'Urgences 24h/24 et 7j/7",
    description: `Notre service d'urgences est disponible 24h/24 et 7j/7 pour assurer une prise en charge rapide et efficace des situations médicales critiques. 
    Équipé d'une équipe multidisciplinaire hautement qualifiée, nous gérons tous types d'urgences : traumatologiques, cardiaques, respiratoires ou autres pathologies graves. 
    Nos installations modernes permettent un diagnostic rapide grâce à l'imagerie et aux laboratoires internes, et des interventions immédiates pour stabiliser chaque patient. 
    Nous priorisons la sécurité, le confort et l'information continue des familles pendant le traitement.`,
  },
  {
    id: 2,
    url: '#',
    src: '/img/consultation.png',
    title: 'Consultations médicales',
    description: `Nos consultations médicales offrent un suivi personnalisé avec des médecins spécialisés dans différentes disciplines. 
    Chaque patient bénéficie d'une évaluation complète, incluant historique médical, examens cliniques détaillés et, si nécessaire, des tests complémentaires pour un diagnostic précis. 
    Nous mettons l'accent sur la prévention, l'éducation thérapeutique et le suivi longitudinal, garantissant une prise en charge globale et adaptée aux besoins spécifiques de chacun.`,
  },
  {
    id: 3,
    url: '#',
    src: '/img/Pédiatrie.jpg',
    title: 'Pédiatrie',
    description: `Notre service de pédiatrie est dédié aux soins des nourrissons, enfants et adolescents. 
    Il assure le suivi complet du développement physique et psychologique, la vaccination, le traitement des maladies courantes et chroniques, ainsi que la prise en charge des urgences pédiatriques. 
    L'équipe médicale travaille en étroite collaboration avec les parents pour assurer un environnement rassurant, sécurisant et favorable à la croissance et au bien-être de l'enfant.`,
  },
  {
    id: 4,
    url: '#',
    src: '/img/radiologie.jpeg',
    title: 'Radiologie & Imagerie médicale',
    description: `Notre service de radiologie propose des examens d'imagerie médicale de haute précision, incluant radiographies, échographies, scanners et IRM. 
    Chaque procédure est réalisée par des radiologues expérimentés utilisant des équipements de dernière génération. 
    Nous garantissons un diagnostic rapide et précis pour orienter le traitement optimal, tout en minimisant l'exposition aux radiations et en assurant le confort des patients.`,
  },
  {
    id: 5,
    url: '#',
    src: '/img/Gyneco.jpeg',
    title: 'Gynécologie & Obstétrique',
    description: `Notre service de gynécologie et obstétrique accompagne la santé féminine à chaque étape de la vie. 
    Il inclut le suivi de grossesse, les accouchements, la gestion des complications obstétricales et la prise en charge des pathologies gynécologiques. 
    Nous proposons un accompagnement personnalisé, combinant expertise médicale, suivi psychologique et conseils sur la prévention, la fertilité et la santé reproductive.`,
  },
  {
    id: 6,
    url: '#',
    src: '/img/Cardiologie.jpeg',
    title: 'Cardiologie',
    description: `Notre service de cardiologie assure la prévention, le diagnostic et le traitement des maladies cardiovasculaires. 
    Les cardiologues évaluent les facteurs de risque, réalisent des examens spécialisés tels que l'électrocardiogramme, l'échocardiographie, le test d'effort et les coronarographies. 
    Les patients bénéficient d'un suivi personnalisé pour la réadaptation cardiaque, la gestion des pathologies chroniques et l’optimisation de leur santé cardiovasculaire.`,
  },
  {
    id: 7,
    url: '#',
    src: '/img/Pneumologie.jpeg',
    title: 'Pneumologie',
    description: `Le service de pneumologie prend en charge les maladies respiratoires, qu'elles soient chroniques ou aiguës. 
    Il comprend l'évaluation et le traitement de l'asthme, de la bronchopneumopathie chronique, des infections respiratoires et des pathologies pulmonaires rares. 
    Nos pneumologues utilisent des examens avancés tels que la spirométrie, la gazométrie et la bronchoscopie pour assurer un suivi précis et adapté à chaque patient.`,
  },
  {
    id: 8,
    url: '#',
    src: '/img/Neurologie.jpeg',
    title: 'Neurologie',
    description: `Le service de neurologie traite les troubles du système nerveux central et périphérique. 
    Les neurologues évaluent et prennent en charge les maladies telles que les accidents vasculaires cérébraux, l'épilepsie, la sclérose en plaques et les neuropathies. 
    Grâce à des examens spécialisés comme l'IRM, l'EEG et la ponction lombaire, nous garantissons des diagnostics précis et des plans de traitement personnalisés pour optimiser la qualité de vie du patient.`,
  },
  {
    id: 9,
    url: '#',
    src: '/img/Gastro.jpeg',
    title: 'Gastro-entérologie',
    description: `Notre service de gastro-entérologie s'occupe des pathologies digestives et hépatiques. 
    Cela inclut les maladies de l'estomac, des intestins, du foie et du pancréas. 
    Les gastro-entérologues réalisent des examens comme l'endoscopie, la coloscopie et l'échographie abdominale pour un diagnostic précis. 
    Nous proposons des traitements adaptés, incluant la gestion des maladies chroniques, les interventions endoscopiques et le suivi nutritionnel.`,
  },
  {
    id: 10,
    url: '#',
    src: '/img/Urologie.jpeg',
    title: 'Urologie',
    description: `Le service d'urologie prend en charge les maladies du système urinaire et des organes génitaux masculins. 
    Il comprend le diagnostic et le traitement des infections urinaires, des calculs rénaux, des cancers urologiques et des troubles de la fertilité. 
    Des interventions chirurgicales mini-invasives sont également réalisées pour assurer le meilleur résultat fonctionnel et esthétique possible.`,
  },
  {
    id: 11,
    url: '#',
    src: '/img/Néphrologie.jpeg',
    title: 'Néphrologie',
    description: 'Prise en charge complète des maladies des reins, incluant l’insuffisance rénale aiguë et chronique, l’hypertension d’origine rénale et les troubles électrolytiques. Le service assure le suivi des patients dialysés, la préparation à la greffe rénale et un accompagnement médical personnalisé visant à préserver la fonction rénale et améliorer la qualité de vie.',
  },
  {
    id: 12,
    url: '#',
    src: '/img/Endocrinologie.jpeg',
    title: 'Endocrinologie',
    description: 'Diagnostic, traitement et suivi des maladies hormonales et métaboliques telles que le diabète, les troubles de la thyroïde, les maladies surrénaliennes et les déséquilibres hormonaux. Le service propose une approche multidisciplinaire axée sur la prévention des complications, l’éducation thérapeutique et un suivi à long terme adapté à chaque patient.',
  },
  {
    id: 13,
    url: '#',
    src: '/img/Rhumatologie.jpeg',
    title: 'Rhumatologie',
    description: 'Spécialisée dans la prise en charge des maladies des articulations, des os et des muscles, la rhumatologie traite les affections inflammatoires et dégénératives telles que l’arthrose, l’arthrite, les rhumatismes inflammatoires chroniques et les maladies auto-immunes. L’objectif est de soulager la douleur, préserver la mobilité et améliorer l’autonomie des patients.',
  },
{
    id: 14,
    url: '#',
    src: '/img/rea-neonate.jpeg',
    title: 'Réanimation Néonatale',
    description: 'Service dédié aux nouveau-nés nécessitant des soins intensifs. Il assure une surveillance médicale rapprochée, des soins spécialisés et un accompagnement complet pour les familles afin d’optimiser la santé et le bien-être des nourrissons à risque.',
  },
  {
    id: 15,
    url: '#',
    src: '/img/Hospitalisation.jpeg',
    title: 'Hospitalisation & Soins continus',
    description: 'Assure une prise en charge médicale complète des patients nécessitant une surveillance continue ou des soins prolongés. Le service met à disposition des équipes médicales et paramédicales qualifiées, garantissant sécurité, confort et suivi personnalisé tout au long de l’hospitalisation.',
  },
  {
    id: 16,
    url: '#',
    src: '/img/ChirurgieGenerale.jpeg',
    title: 'Chirurgie Générale',
    description: 'Prise en charge chirurgicale des pathologies de l’abdomen, de la peau et des tissus mous. Le service réalise des interventions programmées ou en urgence, en utilisant des techniques modernes et sécurisées afin d’assurer une récupération optimale et réduire les complications post-opératoires.',
  },
  {
    id: 17,
    url: '#',
    src: '/img/Orthopedie.jpeg',
    title: 'Chirurgie Orthopédique & Traumatologie',
    description: 'Spécialisée dans le traitement des fractures, des traumatismes osseux et articulaires ainsi que des maladies dégénératives de l’appareil locomoteur. Le service offre des solutions chirurgicales et non chirurgicales visant à restaurer la mobilité, réduire la douleur et permettre une reprise rapide des activités quotidiennes.',
  },
  {
    id: 18,
    url: '#',
    src: '/img/Ophtalmologie.jpeg',
    title: 'Ophtalmologie',
    description: 'Diagnostic et traitement des troubles de la vision et des maladies oculaires, incluant la cataracte, le glaucome et les pathologies rétiniennes. Le service propose des consultations spécialisées, des examens de pointe et des interventions chirurgicales afin de préserver et améliorer la santé visuelle.',
  },
  {
    id: 19,
    url: '#',
    src: '/img/ORL.jpeg',
    title: 'ORL (Oto-Rhino-Laryngologie)',
    description: 'Prise en charge des maladies du nez, de la gorge, des oreilles et des voies respiratoires supérieures. Le service traite les troubles auditifs, les infections ORL, les pathologies de la voix et de la déglutition, avec une approche médicale et chirurgicale adaptée.',
  },
  {
    id: 20,
    url: '#',
    src: '/img/Neurochirurgie.jpeg',
    title: 'Neurochirurgie',
    description: 'Service spécialisé dans le traitement chirurgical des affections du cerveau, de la moelle épinière et du système nerveux. Il prend en charge les traumatismes, les tumeurs et les pathologies dégénératives, en s’appuyant sur des technologies avancées et une expertise médicale de haut niveau.',
  },
  {
    id: 21,
    url: '#',
    src: '/img/Laboratoire.jpeg',
    title: 'Laboratoire d’Analyses Médicales',
    description: 'Notre laboratoire d’analyses médicales assure la réalisation d’examens biologiques fiables, rapides et conformes aux normes de qualité les plus strictes. Il joue un rôle essentiel dans le diagnostic, le suivi thérapeutique et la prévention des maladies. Équipé de technologies modernes et automatisées, le laboratoire permet d’obtenir des résultats précis dans des délais optimisés. Une équipe de biologistes, techniciens et professionnels de santé qualifiés veille à l’exactitude des analyses, au respect des protocoles médicaux et à la confidentialité totale des données des patients. Le service est accessible aussi bien pour les examens de routine que pour les analyses spécialisées, avec une prise en charge adaptée aux situations d’urgence Urgences – 24h/24 : 05 23 42 25 25 / 06 16 18 93 23'
  },
  {
    id: 22,
    url: '#',
    src: '/img/Reanimation.jpeg',
    title: 'Réanimation & Soins intensifs',
    description: 'Prise en charge des patients en état critique nécessitant une surveillance permanente et des soins spécialisés. Le service dispose d’équipements de haute technologie et d’une équipe médicale expérimentée assurant un suivi continu 24h/24.',
  },
  {
    id: 23,
    url: '#',
    src: '/img/Pharmacie.jpeg',
    title: 'Pharmacie Hospitalière',
    description: 'Gestion, préparation et distribution sécurisée des médicaments pour les patients hospitalisés. La pharmacie hospitalière veille à l’optimisation des traitements, à la sécurité médicamenteuse et à la collaboration étroite avec les équipes médicales.',
  },
  // {
  //   id: 24,
  //   url: '#',
  //   src: '/img/Kinesitherapie.jpeg',
  //   title: 'Kinésithérapie & Rééducation',
  //   description: 'Service dédié à la rééducation fonctionnelle après une intervention chirurgicale, un accident ou une pathologie chronique. Les soins visent à restaurer la mobilité, renforcer les capacités physiques et favoriser une récupération durable.',
  // },
  {
    id: 25,
    url: '#',
    src: '/img/Dietetique.jpeg',
    title: 'Nutrition & Diététique',
    description: 'Accompagnement nutritionnel personnalisé pour prévenir et traiter les troubles alimentaires et métaboliques. Le service propose des plans alimentaires adaptés aux besoins médicaux, favorisant une alimentation équilibrée et un meilleur état de santé.',
  },
  {
    id: 26,
    url: '#',
    src: '/img/Psychologie.jpeg',
    title: 'Psychologie & Santé mentale',
    description: 'Accompagnement psychologique et soutien émotionnel des patients confrontés à des difficultés personnelles, médicales ou émotionnelles. Le service vise à améliorer le bien-être mental, renforcer les capacités d’adaptation et favoriser un équilibre psychologique durable.',
  },
];


export interface specialite {
  id: number;
  url?: string;
  src?: string;
  title: string;
  description: string;
  whatsapp?: string;
}

export const specialitesList: specialite[] = [
  {
    id: 1,
    url: '#',
    src: '/img/RADIOLOGY.png',
    title: 'Radiologie',
    description: 'Interventions pour corriger les maladies du cœur et des vaisseaux.',
    whatsapp: "0612345678"
  },
  {
    id: 2,
    url: '#',
    src: '/img/REANIMATION.jpeg',
    title: 'Réanimation',
    description: 'Traitement chirurgical des fractures et maladies des os et articulations.',
  },
  {
    id: 3,
    url: '#',
    src: '/img/CARDIOLOGIE.JPEG',
    title: 'Cardiologie et explorations cardiaque',
    description: 'Opérations de l’abdomen, de la peau et des tissus mous.',
  },
  {
    id: 4,
    url: '#',
    src: '/img/CHIRURGIE-GENERALE.JPEG',
    title: 'Chirurgie Générale',
    description: 'Interventions liées à la santé reproductive féminine.',
  },
  {
    id: 5,
    url: '#',
    src: '/img/ORL.JPEG',
    title: 'Otorhinolaryngologie',
    description: 'Traitement des affections du cerveau, de la moelle épinière et des nerfs.',
  },
  {
    id: 6,
    url: '#',
    src: '/img/OPHTALMOLOGIE.JPEG',
    title: 'Ophtalmologie',
    description: 'Correction des troubles de la vision et des maladies oculaires.',
  },
  {
    id: 7,
    url: '#',
    src: '/img/UROLOGIE.jpeg',
    title: 'Urologie',
    description: 'Traitement des maladies des reins et voies urinaires.',
  },
  {
    id: 8,
    url: '#',
    src: '/img/GYNECO.jpeg',
    title: 'Gynécologie',
    description: 'Suivi et soins liés à la santé reproductive féminine.',
  },
  {
    id: 9,
    url: '#',
    src: '/img/TRAUMATOLOGIE.jpeg',
    title: 'Traumatologie',
    description: 'Prise en charge des blessures et accidents traumatiques.',
  },
  {
    id: 10,
    url: '#',
    src: '/img/NEURO.JPEG',
    title: 'Neuro-Chirurgie',
    description: 'Traitement chirurgical des troubles du cerveau et de la colonne vertébrale.',
  },
  {
    id: 11,
    url: '#',
    src: '/img/GASTRO.JPEG',
    title: 'Gastro-Enterologie',
    description: 'Soins et traitements des maladies digestives et intestinales.',
  },
  {
    id: 12,
    url: '#',
    src: '/img/PEDIATRE.JPEG',
    title: 'Pédiatrie',
    description: 'Suivi médical des enfants et adolescents.',
  },
  {
    id: 13,
    url: '#',
    src: '/img/PNEUMOLOGIE.JPEG',
    title: 'Pneumologie',
    description: 'Soins pour maladies respiratoires et troubles pulmonaires.',
  },
  // {
  //   id: 14,
  //   url: '#',
  //   src: '/img/urgences.png',
  //   title: 'Urgences',
  //   description: 'Soins pour maladies respiratoires et troubles pulmonaires.',
  // },

];


export const aboutUsFooter = [
  { id: 1, title: 'Accueil' , url: '/',},
  { id: 2, title: 'À propos' , url: '/a-propos' },
  { id: 3, title: 'Services' ,url:'/services' },
  { id: 4, title: 'Actualités',url:'/actualites' },
  { id: 5, title: 'Recrutement',url:'/recrutement' },
  { id: 7, title: 'Contact',url:'/contact' },
  { id: 8, title: 'rendez-vous',url:'/rendez-vous' },
];


export interface Event {
  id: number;
  title: string;   
  date?: string;   
  excerpt?: string;
  src?: string;
}

export const eventsList: Event[] = [
  {
    id: 1,
    title: "Portes Ouvertes - Hôpital Les Jasmins",
    date: "10 Nov 2025",
    excerpt: "Découvrez les services de l'hôpital, rencontrez les équipes médicales et assistez à des démonstrations de soins.",
    src: "/img/OUVERTURELJ.PNG",
  },
  {
    id: 2,
    title: "Journée du Don de Sang",
    date: "14 Nov 2025",
    excerpt: "Participez à la collecte de sang et contribuez à renforcer les stocks tout en sensibilisant la population.",
    src: "/img/JOURDONS.PNG",
  },
  {
    id: 3,
    title: "Semaine Santé & Prévention",
    date: "22 Nov 2025",
    excerpt: "Ateliers, conférences et dépistages gratuits pour mieux prévenir les maladies chroniques comme le diabète et l'hypertension.",
    src: "/img/SEMAINESP.JPG",
  },
  {
    id: 4,
    title: "Salon Maternité & Bien-Être",
    date: "30 Nov 2025",
    excerpt: "Pour futures mamans : ateliers, séances d'information et conseils des gynécologues et sages-femmes de l'hôpital.",
    src: "/img/SMB.JPG",
  },
  {
    id: 5,
    title: "Forum Médical Les Jasmins",
    date: "10 Dec 2025",
    excerpt: "Rencontre des professionnels de santé pour échanger sur les nouvelles techniques médicales et assister à des conférences spécialisées.",
    src: "/img/FORUM.JPG",
  },
  {
    id: 6,
    title: "Atelier Nutrition & Bien-Être",
    date: "15 Dec 2025",
    excerpt: "Découvrez les bases d'une alimentation saine et des conseils personnalisés pour améliorer votre santé au quotidien.",
    src: "/img/NUTRITION.JPG",
},
];