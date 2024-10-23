import 'package:flutter/material.dart';

class FormQuestion extends StatefulWidget {
  const FormQuestion({super.key, required this.question});
  final String question;

  @override
  _FormQuestionState createState() => _FormQuestionState();
}

class _FormQuestionState extends State<FormQuestion> {
  String? _selectedAnswer; // Variable para almacenar la respuesta seleccionada

  // Función para construir las respuestas y manejar la selección
  Widget _buildAnswer(String texto) {
    bool isSelected =
        _selectedAnswer == texto; // Verificar si esta opción está seleccionada
    return GestureDetector(
      onTap: () {
        setState(() {
          _selectedAnswer = texto; // Actualizar la respuesta seleccionada
        });
      },
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8.0),
        child: Container(
          padding: const EdgeInsets.all(8.0),
          decoration: BoxDecoration(
            border: Border.all(
                color: isSelected
                    ? Theme.of(context).colorScheme.primary
                    : Colors.grey),
            borderRadius: BorderRadius.circular(5),
            color: isSelected
                ? Theme.of(context).colorScheme.primary.withOpacity(0.2)
                : Colors.transparent,
          ),
          child: Text(
            texto,
            style: TextStyle(
              fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
              color: isSelected ? Theme.of(context).primaryColor : Colors.black,
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(widget.question, style: const TextStyle(fontSize: 16)),
        const SizedBox(height: 8),
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            _buildAnswer("Si"),
            _buildAnswer("No"),
            _buildAnswer("No lo sé"),
          ],
        ),
      ],
    );
  }
}
