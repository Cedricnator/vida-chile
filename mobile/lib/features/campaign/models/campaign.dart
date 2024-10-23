enum StateCampaign { soon, current, finalized, canceled }

class Campaign {
  const Campaign(
      {required this.city,
      required this.adress,
      required this.date,
      required this.startHour,
      required this.finalHour,
      required this.stateCampaign,
      required this.donationCenterName});

  final String donationCenterName;
  final String city;
  final String adress;
  final String date;
  final String startHour;
  final String finalHour;
  final StateCampaign stateCampaign;
}
