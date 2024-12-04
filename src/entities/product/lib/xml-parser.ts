import { Product } from '../model/types'

const LIMIT_PRODUCT_COUNT = 100

export function xmlParser(xmlData: string): Product[] {
	const xmlDocument = new DOMParser().parseFromString(xmlData, 'text/xml')
	const offers = xmlDocument.querySelectorAll('offer')
	const list: Product[] = []

	for (const offer of offers) {
		list.push(parseOffer(offer))
	}

	return list.slice(0, LIMIT_PRODUCT_COUNT)
}
function parseOffer(item: Element): Product {
	if (!item) {
		throw new Error('Не удалось найти элемент offer.')
	}

	const getAttributeValue = (attributeName: string): string => {
		const attribute = item.getAttribute(attributeName)
		if (!attribute) {
			return ' '
		}
		return attribute
	}

	const getChildElementText = (tagName: string): string => {
		const element = item.querySelector(tagName)
		if (!element || !element.textContent) {
			return ''
		}
		return element.textContent.trim()
	}

	return {
		id: Number(getAttributeValue('id')),
		url: getChildElementText('url'),
		price: getChildElementText('price'),
		currencyId: getChildElementText('currencyId'),
		categoryId: Number(getChildElementText('categoryId')),
		picture: getChildElementText('picture'),
		vendor: getChildElementText('vendor'),
		vendorCode: getChildElementText('vendorCode'),
		name: getChildElementText('name'),
		description: getChildElementText('description'),
	}
}
