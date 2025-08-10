import UrlRepository from "@/repositories/UrlRepository";
import shortid from "shortid";
export class UrlShortenerService {
    private urlRepository;
    constructor() {
        this.urlRepository = new UrlRepository();
    }

    async shortenUrl(originalUrl: string) : Promise<string> {
        let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);
        if(url) {
            return url.shortUrl;
        }
        let shortUrl = s
    }
}