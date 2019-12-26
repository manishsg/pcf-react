# pcf-react
A PowerApps Component Framework React starter kit

- [Use of React and Office UI Fabric React in the PowerApps component framework is now available for public preview](https://powerapps.microsoft.com/en-us/blog/use-of-react-and-office-ui-fabric-react-in-the-powerapps-component-framework-is-now-available-for-public-preview/)
- [Get tooling for PowerApps component framework](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/get-powerapps-cli)
- [Create and build a code component](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/create-custom-controls-using-pcf)
- [Package a code component](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/import-custom-controls)
- [Create a React component library with TypeScript and Storybook](https://levelup.gitconnected.com/create-a-react-component-library-with-typescript-and-storybook-ed28fc7511f2)
- [5 Ways to Document React Components in 2020](https://blog.bitsrc.io/5-ways-to-document-react-components-in-2020-ecf60f24dee8)

**Project creation steps**
1. md ProjectName & cd ProjectName
2. pac pcf init --namespace <> --name <> --template <>
3. npm i & npm run build
4. md deploy & cd deploy
5. pac solution init --publisher-name <> --publisher-prefix <>
6. pac solution add-reference --path ..\
7. msbuild /t:build /restore /p:configuration=Release

deploy\Other\Solution.xml 
- UniqueName
- LocalizedName description="" languagecode="1033"

**Coming Soon after the sdk goes live**
