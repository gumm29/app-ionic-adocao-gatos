import { AlertController } from '@ionic/angular';

export function validacao(campos: object, alerta: AlertController){
  let condicao = ''
  for(let campo in campos){
    if(!campos[campo] || !campos[campo].trim()) return modal(campo, alerta)
    condicao += `campos.${campo} && `
  }
  condicao = condicao.slice(0,-4)
  return (eval(condicao)) ? true : false
}

async function modal(campoErrado: String, alerta: AlertController){
  const alert = await alerta.create({
    header: 'Ops!',
    message: `Campo ${campoErrado} em branco`,
    buttons: ['OK']
  });
  await alert.present();
  return false
}