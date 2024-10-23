import 'package:vida_chile_app/features/campaign/models/campaign.dart';

class CampaignRepository {
  static List<Campaign> loadCampaigns() {
    List<Campaign> campaigns = [
      const Campaign(
        donationCenterName: 'Banco de Sangre de Santiago',
        city: 'Santiago',
        adress: 'Avenida Santa Rosa 1234',
        date: '10 de octubre de 2024',
        startHour: '08:00 AM',
        finalHour: '02:00 PM',
        stateCampaign: StateCampaign.current,
      ),
      const Campaign(
        donationCenterName: 'Hospital Regional de Concepción',
        city: 'Concepción',
        adress: 'Calle San Martín 5678',
        date: '22 de noviembre de 2024',
        startHour: '09:00 AM',
        finalHour: '04:00 PM',
        stateCampaign: StateCampaign.soon,
      ),
      const Campaign(
        donationCenterName: 'Clínica Alemana de Valdivia',
        city: 'Valdivia',
        adress: 'Calle General Lagos 4321',
        date: '5 de diciembre de 2024',
        startHour: '07:30 AM',
        finalHour: '01:30 PM',
        stateCampaign: StateCampaign.finalized,
      ),
      const Campaign(
        donationCenterName: 'Banco de Sangre de Antofagasta',
        city: 'Antofagasta',
        adress: 'Avenida Argentina 6789',
        date: '14 de octubre de 2024',
        startHour: '08:30 AM',
        finalHour: '03:00 PM',
        stateCampaign: StateCampaign.canceled,
      ),
      const Campaign(
        donationCenterName: 'Hospital Base de Puerto Montt',
        city: 'Puerto Montt',
        adress: 'Avenida Diego Portales 8765',
        date: '28 de diciembre de 2024',
        startHour: '09:00 AM',
        finalHour: '04:00 PM',
        stateCampaign: StateCampaign.soon,
      ),
    ];
    return campaigns;
  }
}
