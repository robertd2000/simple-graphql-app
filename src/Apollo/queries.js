import { gql } from '@apollo/client';

export const GET_USER_AGENT = gql`
  query {
    client {
      userAgent
    }
  }
`;

export const GET_COUNTRIES_LIST = gql`
  query {
    countries {
      name
      id
      population
      currencies {
        name
      }
      languages {
        name
      }
      capital {
        name
        population
      }
    }
  }
`;

export const GET_COUNTRY_BY_NAME = gql`
  query Country($name: String!) {
    countries(where: { name: { eq: $name } }) {
      name
      id
      population
      currencies {
        name
      }
      continent {
        name
        population
      }
      languages {
        name
      }
      capital {
        name
        population
      }
      cities {
        name
      }
    }
  }
`;
