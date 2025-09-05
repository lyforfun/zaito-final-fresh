import Head from 'next/head'

interface SeoHeadProps {
  title: string
  description: string
  schemaMarkup?: object
}

export default function SeoHead({ title, description, schemaMarkup }: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {schemaMarkup && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      )}
    </Head>
  )
}

