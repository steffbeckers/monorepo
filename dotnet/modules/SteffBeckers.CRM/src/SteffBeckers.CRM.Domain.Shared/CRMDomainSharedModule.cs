﻿using SteffBeckers.CRM.Localization;
using Volo.Abp.Domain;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace SteffBeckers.CRM;

[DependsOn(
	typeof(AbpValidationModule),
	typeof(AbpDddDomainSharedModule)
)]
public class CRMDomainSharedModule : AbpModule
{
	public override void ConfigureServices(ServiceConfigurationContext context)
	{
		Configure<AbpVirtualFileSystemOptions>(options =>
		{
			options.FileSets.AddEmbedded<CRMDomainSharedModule>();
		});

		Configure<AbpLocalizationOptions>(options =>
		{
			options.Resources
				.Add<CRMResource>("en")
				.AddBaseTypes(typeof(AbpValidationResource))
				.AddVirtualJson("/Localization/CRM")
				.AddVirtualJson("/Localization/CRMErrorCodes");
		});

		Configure<AbpExceptionLocalizationOptions>(options =>
		{
			options.MapCodeNamespace("CRM", typeof(CRMResource));
		});
	}
}
