class RequestService {
  async getRequest(url) {
    const
      data = await (
        await fetch(url)
          .then(response => {
            return response.json();
          })
          .catch(reason => {
            return reason.message;
          })
      );

    return data;
  }
}

export default new RequestService();
