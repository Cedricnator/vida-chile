import 'package:vida_chile_app/features/form/model/form.dart';
import 'package:vida_chile_app/features/form/model/page.dart';
import 'package:vida_chile_app/features/form/model/question.dart';

FormModel getFormFromId(int id) {
  return FormModel(pages: [
    Page(questions: [
      Question(question: "¿Ha dormido más de 5 horas continuas?"),
      Question(
          question:
              "¿Ha tenido algún proceso infeccioso en los últimos 14 días?"),
      Question(question: "¿Es usted alérgico o sufre de asma bronquial?"),
      Question(question: "¿Sufre de epilepsia, ataques, desmayos o mareos?"),
      Question(question: "¿Le han transfundido o puesto sangre alguna vez?"),
      Question(question: "¿Se ha vacunado el último año?"),
      Question(question: "¿Ha estado privado de libertad?"),
      Question(
          question:
              "¿Trabaja con ganado, ovejas, faena o transporte de animales?"),
      Question(question: "¿Ha viajado fuera del país en los últimos 12 meses?"),
    ]),
    Page(questions: [
      Question(question: "¿Ha tenido fiebre en los últimos 14 días?"),
      Question(question: "¿Ha tenido tos en los últimos 14 días?"),
      Question(
          question: "¿Ha tenido dolor de garganta en los últimos 14 días?"),
      Question(
          question:
              "¿Ha tenido dificultad para respirar en los últimos 14 días?"),
      Question(question: "¿Ha tenido dolor de cabeza en los últimos 14 días?"),
    ]),
    Page(questions: [
      Question(question: "¿Ha tenido dolor muscular en los últimos 14 días?"),
      Question(
          question:
              "¿Ha tenido dolor de articulaciones en los últimos 14 días?"),
    ])
  ]);
}
