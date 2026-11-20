export const nativasIcons = {
  condor: require('./condor.png'),
  oso_de_anteojos: require('./oso_de_anteojos.png'),
  delfin_rosado: require('./delfin_rosado.png'),
  titi_cabeciblanco: require('./titi_cabeciblanco.png'),
  jaguar: require('./jaguar.png'),
  manati: require('./manati.png'),
  palma_de_cera: require('./palma_de_cera.png'),
  frailejon: require('./frailejon.png'),
  cattleya_trianae: require('./cattleya_trianae.png'),
  morrocoy: require('./morrocoy.png'),
} as const;

export type NativasIconName = keyof typeof nativasIcons;
