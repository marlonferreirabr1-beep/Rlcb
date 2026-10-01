export interface BioLink {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  type: 'instagram' | 'location' | 'pricing' | 'review' | 'whatsapp';
  isExternal?: boolean;
}

export const OFFICIAL_LINKS = {
  whatsapp: 'https://wa.link/5u2o2c',
  instagram: 'https://www.instagram.com/rlcb.barbershop19?stkn=NXB6OHJ4NzV1Z3cy',
  location: 'https://maps.app.goo.gl/GJ4PX1BHYk6DYTMy5?g_st=ac',
  review: 'https://search.google.com/local/writereview?placeid=ChIJKQljV0FJAQcRQmgsX58Yuxo',
  pricingImage: 'https://i.postimg.cc/WzshMs8H/Screenshot-20261001-103652-Instagram.png',
  hoursImage: 'https://i.postimg.cc/d3QVh4tw/Screenshot-20261001-103812-Instagram.png',
  logo: 'https://i.postimg.cc/FRsZDXTW/Emblema-Vintage-de-Barbearia-com-Ferramentas-Cruzadas.png',
  instagramHandle: '@rlcb.barbershop19',
  phoneDisplay: '(82) 99154-8907',
};
