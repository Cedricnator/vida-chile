enum Answer { YES, NO, I_DONT_KNOW, DEFAULT }

extension AnswerExtension on Answer {
  String get value {
    switch (this) {
      case Answer.YES:
        return 'YES';
      case Answer.NO:
        return 'NO';
      case Answer.I_DONT_KNOW:
        return 'I DONT KNOW';
      default:
        return "DEFAULT";
    }
  }

  static Answer fromString(String answer) {
    switch (answer) {
      case 'YES':
        return Answer.YES;
      case 'NO':
        return Answer.NO;
      case 'I DONT KNOW':
        return Answer.I_DONT_KNOW;
      default:
        throw Exception('Invalid answer string: $answer');
    }
  }
}
