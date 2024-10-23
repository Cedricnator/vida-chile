import 'package:vida_chile_app/features/form/model/question.dart';

class Page {
  final List<Question> questions;

  Page({required this.questions});

  // Método para convertir un Map (JSON) en una instancia de Page
  factory Page.fromJson(Map<String, dynamic> json) {
    var questionsJson = json['questions'] as List;
    List<Question> questionsList =
        questionsJson.map((q) => Question.fromJson(q)).toList();

    return Page(
      questions: questionsList,
    );
  }

  // Método para convertir la instancia de Page a un Map (JSON)
  Map<String, dynamic> toJson() {
    return {
      'questions': questions.map((q) => q.toJson()).toList(),
    };
  }
}
