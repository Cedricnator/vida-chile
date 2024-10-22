
import 'package:mobile/features/campaign/entity/campaign_entity.dart';

abstract class CampaignRepository{
  Future<List<Campaign>> getCampaigns();
}