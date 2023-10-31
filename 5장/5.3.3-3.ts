class AdCampaignAPI {
  static async operating(shopNo: number): Promise<AdCampaign[]> {
    try {
      return await fetch(`/ad/shopNumber=${shopNo}`);
    } catch (error) {
      return null;
    }
  }
}
