
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


  Campaign.fromJson(Map<String, dynamic> json)
      : adress = json['adress'] as String,
        city = json['city'] as String,
        date = json['date'] as String,
        donationCenterName = json['donationCenterName'] as String,
        finalHour = json['finalHour'] as String,
        startHour = json['startHour'] as String,
        stateCampaign = StateCampaign.values.firstWhere(
          (e) => e.toString() == 'StateCampaign.${json['stateCampaign']}',
        );

  Map<String, dynamic> toJson() => {
        'adress': adress,
        'city': city,
        'date': date,
        'donationCenterName': donationCenterName,
        'finalHour': finalHour,
        'startHour': startHour,
        'stateCampaign': stateCampaign.toString().split('.').last,
      };
}