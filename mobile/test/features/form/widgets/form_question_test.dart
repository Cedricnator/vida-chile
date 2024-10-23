import 'package:flutter_test/flutter_test.dart';
import 'package:vida_chile_app/features/form/widgets/form_question.dart';
import 'package:flutter/material.dart';

void main() {
  testWidgets("the form question must have title and options", (tester) async {
    const String question = "¿Has comido el día de hoy?";
    await tester.pumpWidget(const MaterialApp(
      home: Scaffold(
        body: FormQuestion(question: question),
      ),
    ));
    //Create the finders
    final questionFinder = find.text(question);
    final siFinder = find.text("Si");
    final noFinder = find.text("No");
    final noLoSeFinder = find.text("No lo sé");

    expect(questionFinder, findsOneWidget);
    expect(siFinder, findsOneWidget, reason: "debe tener la opción si");
    expect(noFinder, findsOneWidget, reason: "debe tener la opción no");
    expect(noLoSeFinder, findsOneWidget,
        reason: "debe tener la opción No lo sé");
  });
}
