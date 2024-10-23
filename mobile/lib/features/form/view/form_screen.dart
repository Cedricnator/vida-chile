import 'package:flutter/material.dart';
import 'package:vida_chile_app/features/form/model/form.dart';
import 'package:vida_chile_app/features/form/services/api_form.dart';
import 'package:vida_chile_app/features/form/widgets/form_progress_manager.dart';
import 'package:vida_chile_app/features/form/widgets/form_question.dart';

class FormScreen extends StatefulWidget {
  const FormScreen({super.key});

  @override
  State<FormScreen> createState() => _FormScreenState();
}

class _FormScreenState extends State<FormScreen> {
  int actualPage = 1;
  int totalPages = getFormFromId(1).pages.length;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Formulario'),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        child: Column(
          children: [
            FormProgressManager(
              actualPage: actualPage,
              totalPages: totalPages,
              onPageChanged: (value) {
                setState(() {
                  actualPage = value;
                });
              },
            ),
            Container(
              padding: const EdgeInsets.all(8),
              child: const Text(
                'Puede responder “no lo sé” para tener asistencia en la entrevista presencial',
                textAlign: TextAlign.center,
              ),
            ),
            Expanded(
              flex: 1,
              // Usar Expanded para que ListView ocupe el espacio restante
              //TODO:
              child: ListView(
                children: _buildQuestions(getFormFromId(1)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  List<Widget> _buildQuestions(FormModel form) {
    List<Widget> questionWidgets =
        []; // Crear una lista para almacenar los widgets de preguntas
    setState(() {
      totalPages = form.pages.length; // Actualizar el total de páginas
    });
    for (var question in form.pages[actualPage - 1].questions) {
      // Agregar cada widget de pregunta a la lista
      questionWidgets.add(FormQuestion(question: question.question));
    }

    return questionWidgets; // Devolver la lista de widgets
  }
}
