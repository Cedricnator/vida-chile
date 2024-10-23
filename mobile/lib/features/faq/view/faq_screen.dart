import 'package:flutter/material.dart';
import 'package:vida_chile_app/common/widgets/nav_bar.dart';
import 'package:flutter_faq/flutter_faq.dart';

class FaqPage extends StatelessWidget {
  const FaqPage({super.key});

  @override
  Widget build(BuildContext context) {
    // Datos estáticos temporales
    final List<Map<String, String>> faqs = [
      {
        "question": "¿Cómo puedo donar sangre?",
        "answer":
            "Debes tener entre 18 y 65 años, pesar más de 50 kg y estar en buen estado de salud."
      },
      {
        "question": "¿Cuántas veces puedo donar al año?",
        "answer":
            "Los hombres pueden donar cada 3 meses y las mujeres cada 4 meses."
      },
      {
        "question": "¿Es seguro donar sangre durante la pandemia?",
        "answer":
            "Sí, las organizaciones de donación siguen protocolos estrictos de higiene."
      },
      {
        "question": "¿Quién puede donar sangre?",
        "answer": 
          "Cualquier persona sana entre los 18 y los 65 años de edad, con un peso mínimo de 50 kg. Si un donante habitual cumple los 65 años puede seguir donando, con autorización del médico responsable"
      },
      {
        "question": "¿Con qué frecuencia se puede donar?",
        "answer":
          "Los hombres, cuatro veces al año; las mujeres, tres veces al año. Entre dos donaciones debe transcurrir un mínimo de dos meses. Las donaciones de aféresis pueden realizarse con más frecuencia."
      },
      {
        "question": "¿Qué se obtiene de una donación de sangre?",
        "answer":
          "De una donación de sangre total se obtienen unidades de concentrado de hematíes, plasma y plaquetas. La donación de plasma tiene sus ventajas. Si el donante dispone de más tiempo y decide donar plasma se obtiene una cantidad mayor de estos componentes sanguíneos por cada donación. Asimismo, si el donante tiene falta de hemoglobina, como les ocurre a algunas mujeres durante la menstruación, no podrá donar sangre pero sí plasma."
      },
      {
        "question": "¿Cuánto dura una donación de sangre?",
        "answer": 
          "Una donación de sangre total suele durar unos 20 minutos. Las donaciones por aféresis requieren un poco más de tiempo y depende del componente obtenido."
      },
      {
        "question": "¿Para donar se debe estar en ayunas?",
        "answer":
          "No, en cambio es aconsejable tomar algún alimento ligero dos horas antes."
      },
      {
        "question": "¿Se hacen anális de sangre?",
        "answer": "Sí, antes de donar se hacen análisis de sangre para conocer el estado de salud del donante."
      },
      {
        "question": "¿Puedo obtener los resultados del analisis de la donación?",
        "answer": 
          "Sí, una vez finalizado el estudio se le enviará información sobre el resultado."
      },
      {
        "question": "¿Se recibe remuneración económica por donar sangre",
        "answer":
          "No, la donación de sangre es un acto altruista y no está retribuida en nuestro país."
      },
      {
        "question": "Si me hago un tatuaje o me pongo un piercing, ¿puedo donar?",
        "answer":
          "Puede donar transcurrido un periodo de tiempo de cuatro meses desde que se realiza."
      }
    ];

    return Scaffold(
      drawer: const NavBar(),
      appBar: AppBar(
        title: const Text("Preguntas Frecuentes"),
      ),
      body: ListView.builder(
        itemCount: faqs.length,
        itemBuilder: (context, index) {
          return FAQ(
            question: faqs[index]["question"] ?? '',
            answer: faqs[index]["answer"] ?? '',
            queStyle: Theme.of(context).textTheme.titleMedium,
            queDecoration:
                BoxDecoration(color: Theme.of(context).dialogBackgroundColor),
            ansDecoration:
                BoxDecoration(color: Theme.of(context).dialogBackgroundColor),
            ansStyle: Theme.of(context).textTheme.bodyMedium,
            separator: const Divider(
              height: 50,
              thickness: 0,
            ),
          );
        },
      ),
    );
  }
}
