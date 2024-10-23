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
