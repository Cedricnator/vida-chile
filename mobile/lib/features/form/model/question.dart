import 'package:vida_chile_app/features/form/model/answer.dart';

class Question {
  final String question;
  Answer answer; // Cambiar a tipo Answer
  final bool acceptNegativeAnswer;
  final bool acceptPositiveAnswer;

  Question({
    required this.question,
    this.answer = Answer.DEFAULT,
    this.acceptNegativeAnswer = true,
    this.acceptPositiveAnswer = true,
  });

  // Método para convertir un Map (JSON) en una instancia de Question
  factory Question.fromJson(Map<String, dynamic> json) {
    return Question(
      question: json['question'] as String,
      answer: AnswerExtension.fromString(
          json['answer']), // Usar el método de conversión
      acceptNegativeAnswer: json['acceptNegativeAnswer'] ?? true,
      acceptPositiveAnswer: json['acceptPositiveAnswer'] ?? true,
    );
  }

  // Método para convertir la instancia de Question a un Map (JSON)
  Map<String, dynamic> toJson() {
    return {
      'question': question,
      'answer': answer.value, // Usar el getter value
      'acceptNegativeAnswer': acceptNegativeAnswer,
      'acceptPositiveAnswer': acceptPositiveAnswer,
    };
  }
}
