import { URL } from '~/lib/constants'

const Fetch = async (url) => {
  const res = await fetch(`${URL}/api/${url}`);
  const repo = await res.json();
  return repo;
};

export async function Report(props) {
  const res = await Fetch(`/reports/fetch?id=${props.slug}`);
  return res;
}

