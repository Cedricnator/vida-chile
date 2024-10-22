import 'package:flutter/material.dart';
import 'package:mobile/common/widgets/nav_bar.dart';

class FAQ extends StatelessWidget {
  final String question;
  final String answer;
  final TextStyle? queStyle;
  final BoxDecoration? queDecoration;
  final BoxDecoration? ansDecoration;
  final TextStyle? ansStyle;
  final Widget? separator;

  const FAQ({
    super.key, 
    required this.question,
    required this.answer,
    this.queStyle,
    this.queDecoration,
    this.ansDecoration,
    this.ansStyle,
    this.separator,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(question),
        subtitle: Text(answer),
      ),
    );
  }
}


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
