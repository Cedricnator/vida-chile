import 'package:flutter/material.dart';
import 'package:vida_chile_app/features/form/widgets/form_question.dart';
//Esta pantalla se encarga de recibir el id del formulario de un operativo
//para  consultarlo y dividirlo en varias sub pantallas.

class FormScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Formulario'),
        ),
        body: Column(
          children: [
            Container(
              padding: EdgeInsets.all(8),
              child: const Text(
                'Puede responder “no lo sé” para tener asistencia en la entrevista presencial',
                textAlign: TextAlign.center,
              ),
            ),
            FormQuestion(
                question:
                    "Has visitado a algun cardiólogo los ultimos 6 meses?"),
            FormQuestion(question: "has comido el día de hoy?"),
          ],
        ));
  }
}
