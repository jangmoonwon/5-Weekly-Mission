interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

interface Link {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

export interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}