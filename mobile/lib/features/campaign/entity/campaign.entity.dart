
import 'state-campaing.enum.dart';

class Campaign {
  const Campaign(
    {
      required this.adress,
      required this.city,
      required this.date,
      required this.donationCenterName,
      required this.finalHour,
      required this.startHour,
      required this.stateCampaign
    }
  );

  final String adress;
  final String city;
  final String date;
  final String donationCenterName;
  final String finalHour;
  final String startHour;
  final StateCampaign stateCampaign;
}